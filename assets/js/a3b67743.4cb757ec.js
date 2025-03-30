"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9394],{2331:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration/environment","title":"Environment","description":"+ Effective environment management is crucial for ensuring consistency, reproducibility, and efficiency in software development and data analysis workflows.","source":"@site/docs/2.administration/1.environment.md","sourceDirName":"2.administration","slug":"/administration/environment","permalink":"/river-docs/docs/administration/environment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"R","permalink":"/river-docs/docs/programming/R"},"next":{"title":"Remote Server Using SSH","permalink":"/river-docs/docs/administration/ssh-remote-server"}}');var r=s(4848),t=s(8453);const o={},a="Environment",c={},l=[{value:"1. Containerization &amp; Orchestration",id:"1-containerization--orchestration",level:2},{value:"2. Environment Management",id:"2-environment-management",level:2},{value:"3. Infrastructure as Code (IaC)",id:"3-infrastructure-as-code-iac",level:2},{value:"4. Configuration &amp; Secrets Management",id:"4-configuration--secrets-management",level:2},{value:"5. Versioning &amp; CI/CD Pipelines",id:"5-versioning--cicd-pipelines",level:2}];function d(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"environment",children:"Environment"})}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Effective environment management is crucial for ensuring consistency, reproducibility, and efficiency in software development and data analysis workflows."}),"\n",(0,r.jsx)(e.li,{children:"By properly managing dependencies, configurations, and runtime environments, teams can minimize conflicts, reduce errors, and enhance collaboration."}),"\n",(0,r.jsx)(e.li,{children:"This is especially important in scientific computing, where reproducibility and stability are key factors."}),"\n"]})}),"\n",(0,r.jsx)("figure",{markdown:"span",children:(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"cluster",src:s(8352).A+"",width:"720",height:"358"})})}),"\n",(0,r.jsx)(e.p,{children:"Common practices for specific tasks include:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Docker for containerization."}),"\n",(0,r.jsx)(e.li,{children:"Singularity for HPC clusters."}),"\n",(0,r.jsx)(e.li,{children:"Conda for managing bioinformatics tools."}),"\n",(0,r.jsx)(e.li,{children:"Terraform + Ansible for infrastructure."}),"\n",(0,r.jsx)(e.li,{children:"GitHub Actions or GitLab CI/CD for automated deployments."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["Ensuring a consistent environment across development, staging, and production requires a combination of ",(0,r.jsx)(e.strong,{children:"containerization, infrastructure as code (IaC), and environment management"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"For deeper understanding, follow these blogs and documentation:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u2328\ufe0f ",(0,r.jsx)(e.a,{href:"https://www.freecodecamp.org/news/docker-vs-vm-key-differences-you-should-know/",children:"https://www.freecodecamp.org/news/docker-vs-vm-key-differences-you-should-know/"})]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"1-containerization--orchestration",children:"1. Containerization & Orchestration"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["It allows the installed softwares can be portable, run on any devices. It commonly uses in production\nVisual Studio Code provides a cool feature called ",(0,r.jsx)(e.a,{href:"https://code.visualstudio.com/docs/devcontainers/containers",children:(0,r.jsx)(e.strong,{children:"devcontainers"})})," that allows to use the VSCode feature inside container to develop"]})}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"If a user with docker group that can take the root permissions. Do not add users if they are not the admin. It can be used docker-rootless instead"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://www.docker.com/",children:"Docker"})})," \u2013 Packages applications and dependencies into containers for consistency."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://github.com/apptainer/singularity",children:"Singularity/Apptainer"})})," - Singularity/Apptainer is container designed for ease-of-use on shared systems and in high performance computing (HPC) environments"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://podman.io/",children:"Podman"})})," \u2013 Rootless alternative to Docker with improved security."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://kubernetes.io/",children:"Kubernetes (K8s)"})})," \u2013 Manages and orchestrates containers across environments."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})})," \u2013 Defines multi-container applications, useful for local and staging environments."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 ",(0,r.jsx)(e.strong,{children:"Best for:"})," Microservices, scalable applications, and DevOps teams."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"2-environment-management",children:"2. Environment Management"}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsx)(e.p,{children:"Good for developing environment. It can be installed via the containers, then, install requires software"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://docs.conda.io/en/latest/",children:"Conda/Micromamba"})})," \u2013 Ideal for managing Python and bioinformatics dependencies."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://github.com/pyenv/pyenv",children:"Pyenv"})})," \u2013 Manages multiple Python versions easily."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://python-poetry.org/",children:"Poetry"})})," \u2013 Dependency and environment management for Python."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 ",(0,r.jsx)(e.strong,{children:"Best for:"})," Python projects, package isolation, and scientific computing."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"3-infrastructure-as-code-iac",children:"3. Infrastructure as Code (IaC)"}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsxs)(e.p,{children:["RiverXData uses SLURM to allocate and scale resource. To set up a standard SLURM cluster, please follow ",(0,r.jsx)(e.a,{href:"https://github.com/riverxdata/river-slurm",children:"this"})," to set up using ",(0,r.jsx)(e.strong,{children:"Ansible"})]})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://www.ansible.com/",children:"Ansible"})})," \u2013 Automates software provisioning and configuration."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://www.terraform.io/",children:"Terraform"})})," \u2013 Manages infrastructure (servers, networks, cloud services)."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://puppet.com/",children:"Puppet"})})," / ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://www.chef.io/",children:"Chef"})})," \u2013 Configuration management tools for infrastructure automation."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 ",(0,r.jsx)(e.strong,{children:"Best for:"})," Cloud infrastructure, large-scale deployments, and automating provisioning."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"4-configuration--secrets-management",children:"4. Configuration & Secrets Management"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://github.com/motdotla/dotenv",children:"dotenv (.env files)"})})," \u2013 Manages environment variables for different environments."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://www.vaultproject.io/",children:"HashiCorp Vault"})})," \u2013 Securely stores and manages secrets and credentials."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",children:"AWS Parameter Store"})})," \u2013 Cloud-based secrets management."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 ",(0,r.jsx)(e.strong,{children:"Best for:"})," Managing sensitive configuration variables across environments."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"5-versioning--cicd-pipelines",children:"5. Versioning & CI/CD Pipelines"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://github.com/features/actions",children:"GitHub Actions"})})," / ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://docs.gitlab.com/ee/ci/",children:"GitLab CI/CD"})})," \u2013 Automates deployment workflows."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://www.jenkins.io/",children:"Jenkins"})})," \u2013 Open-source and highly customizable CI/CD tool."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://argo-cd.readthedocs.io/en/stable/",children:"ArgoCD"})})," \u2013 GitOps-based Kubernetes deployment."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://fluxcd.io/",children:"FluxCD"})})," \u2013 Automates Kubernetes deployments via Git."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u2705 ",(0,r.jsx)(e.strong,{children:"Best for:"})," Automating deployment, testing, and ensuring consistency between environments."]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8352:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/environment-ed98aac9fc4a7b27479b0521d79ff88c.webp"},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);