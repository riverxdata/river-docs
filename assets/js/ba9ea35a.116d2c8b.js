"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[596],{191:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/login_password-93ea2975d9111ca4f17cb209958a10d6.png"},643:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Administration/Remote_server","title":"Remote Server","description":"What is SSH ?","source":"@site/docs/2.Administration/2.Remote_server.md","sourceDirName":"2.Administration","slug":"/Administration/Remote_server","permalink":"/river-docs/docs/Administration/Remote_server","draft":false,"unlisted":false,"editUrl":"https://github.com/riverxdata/docs/2.Administration/2.Remote_server.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Environment","permalink":"/river-docs/docs/Administration/Environment"},"next":{"title":"Overview","permalink":"/river-docs/docs/HPC/Slurm"}}');var i=n(4848),o=n(8453);const t={},a="Remote Server",l={},c=[{value:"<strong>Why Use a Remote Server or Cluster Instead of a Laptop?</strong>",id:"why-use-a-remote-server-or-cluster-instead-of-a-laptop",level:2},{value:"<strong>Illustration of Remote Server Setup</strong>",id:"illustration-of-remote-server-setup",level:3},{value:"<strong>Remote Server: Setup openssh-server service</strong>",id:"remote-server-setup-openssh-server-service",level:2},{value:"<strong>1. Install the SSH Server</strong>",id:"1-install-the-ssh-server",level:3},{value:"<strong>2. Enable and Start SSH Service</strong>",id:"2-enable-and-start-ssh-service",level:3},{value:"<strong>Local Client:  Setup openssh-client</strong>",id:"local-client--setup-openssh-client",level:2},{value:"<strong>1. Install the SSH Client</strong>",id:"1-install-the-ssh-client",level:3},{value:"<strong>2. Login via SSH using password</strong>",id:"2-login-via-ssh-using-password",level:3},{value:"<strong>3. Login via SSH using rsa key (more secure)</strong>",id:"3-login-via-ssh-using-rsa-key-more-secure",level:3},{value:"<strong>4. Login via SSH using rsa key (more secure) automatically</strong>",id:"4-login-via-ssh-using-rsa-key-more-secure-automatically",level:3},{value:"<strong>5. If you have new device, while you already have a setup for a previous device, copying key manually</strong>",id:"5-if-you-have-new-device-while-you-already-have-a-setup-for-a-previous-device-copying-key-manually",level:3},{value:"Advanced: Set up for real world application",id:"advanced-set-up-for-real-world-application",level:2},{value:"1. Change the basic ssh config, reload",id:"1-change-the-basic-ssh-config-reload",level:3},{value:"2. Request users to create their own key",id:"2-request-users-to-create-their-own-key",level:3},{value:"3. The admin helps to copy keys",id:"3-the-admin-helps-to-copy-keys",level:3},{value:"<strong>4. Why Not Other Setups?</strong>",id:"4-why-not-other-setups",level:3},{value:"\ud83d\udd39 <strong>Fail2Ban</strong>",id:"-fail2ban",level:4},{value:"\ud83d\udd39 <strong>2FA (e.g., Google Authenticator)</strong>",id:"-2fa-eg-google-authenticator",level:4},{value:"5 <strong>Conclusion</strong>",id:"5-conclusion",level:3},{value:"<strong>Basic Commands for Remote Usage</strong>",id:"basic-commands-for-remote-usage",level:2},{value:"Check system resources:",id:"check-system-resources",level:3},{value:"Transfer files:",id:"transfer-files",level:3},{value:"<strong>SSH Tunneling</strong>",id:"ssh-tunneling",level:3},{value:"<strong>Remote Tunnel</strong>",id:"remote-tunnel",level:4},{value:"<strong>Local Tunnel</strong>",id:"local-tunnel",level:4},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"remote-server",children:"Remote Server"})}),"\n",(0,i.jsx)(s.p,{children:"What is SSH ?"}),"\n",(0,i.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",maxWidth:"100%",background:"#000"},children:(0,i.jsx)("iframe",{src:"https://www.youtube.com/embed/5JvLV2-ngCI",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),"\n",(0,i.jsx)(s.h2,{id:"why-use-a-remote-server-or-cluster-instead-of-a-laptop",children:(0,i.jsx)(s.strong,{children:"Why Use a Remote Server or Cluster Instead of a Laptop?"})}),"\n",(0,i.jsx)(s.p,{children:"The server or cluster (the combinations of multiple servers (nodes)) that will allow to scheduled and executed parrallel tasks, sharing the resources via network.\nRunning computational workloads on a remote server or cluster is essential for performance, scalability, and reliability."}),"\n",(0,i.jsx)(s.h3,{id:"illustration-of-remote-server-setup",children:(0,i.jsx)(s.strong,{children:"Illustration of Remote Server Setup"})}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(1469).A+"",width:"646",height:"288"})})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"remote-server-setup-openssh-server-service",children:(0,i.jsx)(s.strong,{children:"Remote Server: Setup openssh-server service"})}),"\n",(0,i.jsx)(s.p,{children:"To allow access from a client (your local laptop) to the remote server, you need to install the SSH server and client."}),"\n",(0,i.jsx)(s.p,{children:"For Debian-based OS, use the following software via the SSH protocol, ensuring all data is encrypted and decrypted:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"openssh-server"})}),": Install this on the remote machine. It stores authorized user information (passwords and public keys). When a client attempts to connect, it verifies the credentials to allow authorized users access."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"openssh-client"})}),": Install this on your local machine. It sends authorized user information (passwords and private keys). If the credentials match, the user is allowed to log in."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If your remote server is not on a public network (WAN), it can still be accessed within a local area network (LAN)."}),"\n",(0,i.jsx)(s.li,{children:"If you have administrative permissions on your wireless router, consider using DDNS and port forwarding to allow access from outside the LAN."}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Testing purpose"}),": You can use your local machine, or a container service to install both server and client services. For your real remote server, replace it with ",(0,i.jsx)(s.code,{children:"locahost"})]}),"\n"]})}),"\n",(0,i.jsx)(s.h3,{id:"1-install-the-ssh-server",children:(0,i.jsx)(s.strong,{children:"1. Install the SSH Server"})}),"\n",(0,i.jsx)(s.p,{children:"For testing purpose, you can install on your local debian OS machine"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"docker run -it ubuntu:20.04 bash\n"})}),"\n",(0,i.jsxs)(s.p,{children:["On your remote server, install ",(0,i.jsx)(s.code,{children:"openssh-server"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo apt update && sudo apt install -y openssh-server\n"})}),"\n",(0,i.jsx)(s.h3,{id:"2-enable-and-start-ssh-service",children:(0,i.jsx)(s.strong,{children:"2. Enable and Start SSH Service"})}),"\n",(0,i.jsx)(s.p,{children:"Check the status of the ssh service"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo systemctl status ssh\n"})}),"\n",(0,i.jsx)(s.p,{children:"Ensure the SSH service is running and enabled at boot, then start it service now:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# enable at boot, don't need to turn this service again when you restart your remote server\nsudo systemctl enable ssh\n# start now\nsudo systemctl start ssh\n# check status\nsudo systemctl status ssh\n"})}),"\n",(0,i.jsx)(s.p,{children:"The result should be similared to this"}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(9893).A+"",width:"1308",height:"456"})})}),"\n",(0,i.jsx)(s.p,{children:'Create a test user, so you can use it later. The username will be "river", while the password will be "password2025"'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo useradd -m -s /bin/bash river\necho 'river:password2025' | sudo chpasswd\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["By default, the config for the ",(0,i.jsx)(s.code,{children:"ssh-server"})," service is not truly safe, we can adjust later on the advanced section. Modify the ",(0,i.jsx)(s.code,{children:"sshd_config"}),"- the open ssh service config,\nreload it then it can be reliable for the real world application."]})}),"\n",(0,i.jsx)(s.h2,{id:"local-client--setup-openssh-client",children:(0,i.jsx)(s.strong,{children:"Local Client:  Setup openssh-client"})}),"\n",(0,i.jsx)(s.h3,{id:"1-install-the-ssh-client",children:(0,i.jsx)(s.strong,{children:"1. Install the SSH Client"})}),"\n",(0,i.jsxs)(s.p,{children:["On your local machine, install ",(0,i.jsx)(s.code,{children:"openssh-client"}),". For testing, you can install on the same machine where you install ",(0,i.jsx)(s.code,{children:"openssh-server"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo apt update && sudo apt install -y openssh-client\n"})}),"\n",(0,i.jsx)(s.h3,{id:"2-login-via-ssh-using-password",children:(0,i.jsx)(s.strong,{children:"2. Login via SSH using password"})}),"\n",(0,i.jsx)(s.p,{children:"Using the above user, login to it own:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh river@localhost\n"})}),"\n",(0,i.jsx)(s.p,{children:"It will ask for the password, just type the above password for user river"}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(191).A+"",width:"1308",height:"349"})})}),"\n",(0,i.jsx)(s.h3,{id:"3-login-via-ssh-using-rsa-key-more-secure",children:(0,i.jsx)(s.strong,{children:"3. Login via SSH using rsa key (more secure)"})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Login using rsa key, you do not need to type password again. This will be an alternative for password authentication.\nYou can login via the SSH protocal using key pair. It will look whether your local private key is a pair with your remove sever public key"})}),"\n",(0,i.jsxs)(s.p,{children:["Change your user to river, create the key.\nPress ",(0,i.jsx)(s.strong,{children:"Enter"})," until it finish. There are many more algorithms (just create a pair of string that are matched to each other), for more information, follow ",(0,i.jsx)(s.a,{href:"https://goteleport.com/blog/comparing-ssh-keys/",children:(0,i.jsx)(s.strong,{children:"here"})})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"su river\nssh-keygen -t rsa -b 4096\n"})}),"\n",(0,i.jsx)(s.p,{children:"It will create a key pair that is located on user home folder."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ls -lah /home/river/.ssh\n"})}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(6838).A+"",width:"1308",height:"456"})})}),"\n",(0,i.jsx)(s.p,{children:"Copy your public key content, login to the remote server again to write into the key files"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh river@localhost\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Create a new file, on ssh server, under the ",(0,i.jsx)(s.code,{children:"HOME"})," folder;"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"nano ~/.ssh/authorized_keys\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Add your content of the ",(0,i.jsx)(s.code,{children:"id_rsa.pub"})," to this file. If you have more public keys to access from multiple machine, just append\nLogout, and then login again. You will no longer need to type password. By default, it will use your key at ",(0,i.jsx)(s.code,{children:"~/.ssh/id_rsa"})," and your relative username at port 22 to authenticate."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"For the first time, it will ask to continue connect, allow to make fingerprint on the remote server."})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh river@localhost\n"})}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(2761).A+"",width:"1308",height:"456"})})}),"\n",(0,i.jsx)(s.h3,{id:"4-login-via-ssh-using-rsa-key-more-secure-automatically",children:(0,i.jsx)(s.strong,{children:"4. Login via SSH using rsa key (more secure) automatically"})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Previously, it takes more efforts to add your pubkey to the remote sever manually.\nIs there any automation for copying it?"})}),"\n",(0,i.jsx)(s.p,{children:"Using the ssh-copy-id"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id river@localhost\n"})}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(7133).A+"",width:"1308",height:"456"})})}),"\n",(0,i.jsx)(s.h3,{id:"5-if-you-have-new-device-while-you-already-have-a-setup-for-a-previous-device-copying-key-manually",children:(0,i.jsx)(s.strong,{children:"5. If you have new device, while you already have a setup for a previous device, copying key manually"})}),"\n",(0,i.jsxs)(s.p,{children:["On your new device, after generating the new key, copying this key file to your existed key setup device, using ",(0,i.jsx)(s.code,{children:"scp"})," to copy this to remote server"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scp id_rsa.pub river@localhost:/home/river\ncat id_rsa.pub >> /home/river/.ssh/authorized_keys\nrm id_rsa.pub\n"})}),"\n",(0,i.jsx)(s.h2,{id:"advanced-set-up-for-real-world-application",children:"Advanced: Set up for real world application"}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"By default, the ssh sever is setup with port 22 by default, and more:"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Password Authentication Enabled"}),": Allows brute-force attacks where hackers try common and random passwords and usernames until they match."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\ud83d\udd27 Fix: Use SSH keys (",(0,i.jsx)(s.code,{children:"PasswordAuthentication no"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Root Login Allowed"}),": Attackers can gain full control."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\ud83d\udd27 Fix: Disable root login (",(0,i.jsx)(s.code,{children:"PermitRootLogin no"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Empty Passwords Allowed"}),": Anyone can log in if a user has no password."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\ud83d\udd27 Fix: Disable it (",(0,i.jsx)(s.code,{children:"PermitEmptyPasswords no"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"X11 Forwarding Enabled"}),": Can expose your system."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\ud83d\udd27 Fix: Disable it (",(0,i.jsx)(s.code,{children:"X11Forwarding no"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"No Login Attempt Limits"}),": Attackers can keep guessing passwords. Limiting attempts in a single connection requires more resources to attack your system."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\ud83d\udd27 Fix: Set a limit (",(0,i.jsx)(s.code,{children:"MaxAuthTries 3"}),")."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(s.h3,{id:"1-change-the-basic-ssh-config-reload",children:"1. Change the basic ssh config, reload"}),"\n",(0,i.jsx)(s.p,{children:"Using nano to edit your config file"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo nano /etc/ssh/sshd_config\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Install ",(0,i.jsx)(s.code,{children:"nano"})," editor if you do not have it"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo apt-get install nano -y\n"})}),"\n",(0,i.jsx)(s.p,{children:"Scroll down, using up/down key, find each of these lines"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"PasswordAuthentication no\nPermitRootLogin no\nMaxAuthTries 3\nPermitEmptyPasswords no\nX11Forwarding no\n"})}),"\n",(0,i.jsx)(s.p,{children:"Reload new config"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# restart\nsudo systemctl restart ssh\n# check status\nsudo systemctl status ssh\n"})}),"\n",(0,i.jsx)(s.h3,{id:"2-request-users-to-create-their-own-key",children:"2. Request users to create their own key"}),"\n",(0,i.jsxs)(s.p,{children:["Give the admin the pub key. Highly recommended to use ",(0,i.jsx)(s.strong,{children:"ed25519"})," algorithm to generate key pair"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh-keygen -t ed25519\n"})}),"\n",(0,i.jsx)(s.h3,{id:"3-the-admin-helps-to-copy-keys",children:"3. The admin helps to copy keys"}),"\n",(0,i.jsx)(s.p,{children:"On the remote machine, the admin copying the user pub key and put to the remote server. Of course, the admin has been added his/her own pubkey."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# example: scp id_rsa.pub <admin username>@localhost:/<admin userhome>\nscp id_rsa.pub admin@localhost:/home/admin\nssh admin@localhost\n"})}),"\n",(0,i.jsx)(s.p,{children:"After login, manually do it. The the user can login using key pair after that."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# chane to root to not need type password as sudo permission \nsudo su\nmkdir -p /home/river/.ssh\ncat id_rsa.pub >> /home/river/.ssh/authorized_keys\nchmod 700 /home/river/.ssh\nchmod 600 /home/river/.ssh/authorized_keys\nchown -R river:river /home/river/.ssh\nrm id_rsa.pub\n"})}),"\n",(0,i.jsx)(s.h3,{id:"4-why-not-other-setups",children:(0,i.jsx)(s.strong,{children:"4. Why Not Other Setups?"})}),"\n",(0,i.jsxs)(s.p,{children:["Besides SSH key authentication, there are other security measures like ",(0,i.jsx)(s.strong,{children:"Fail2Ban"})," and ",(0,i.jsx)(s.strong,{children:"2FA"}),", but they are ",(0,i.jsx)(s.strong,{children:"not necessary"})," in this setup for the following reasons:"]}),"\n",(0,i.jsxs)(s.h4,{id:"-fail2ban",children:["\ud83d\udd39 ",(0,i.jsx)(s.strong,{children:"Fail2Ban"})]}),"\n",(0,i.jsxs)(s.p,{children:["Fail2Ban is useful for blocking brute-force attacks on SSH. However, it is ",(0,i.jsx)(s.strong,{children:"not needed"})," in this setup because:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Password authentication is already disabled"}),", so brute-force attacks are ",(0,i.jsx)(s.strong,{children:"not possible"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["SSH keys ",(0,i.jsx)(s.strong,{children:"do not allow unlimited login attempts"}),", unlike passwords."]}),"\n",(0,i.jsxs)(s.li,{children:["Additional protection like Fail2Ban ",(0,i.jsx)(s.strong,{children:"only adds unnecessary complexity"})," when SSH keys are used exclusively."]}),"\n"]}),"\n",(0,i.jsxs)(s.h4,{id:"-2fa-eg-google-authenticator",children:["\ud83d\udd39 ",(0,i.jsx)(s.strong,{children:"2FA (e.g., Google Authenticator)"})]}),"\n",(0,i.jsxs)(s.p,{children:["Two-Factor Authentication (2FA) provides extra security, but it is ",(0,i.jsx)(s.strong,{children:"not needed"})," because:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SSH keys are already highly secure"}),", and 2FA mainly protects ",(0,i.jsx)(s.strong,{children:"password-based"})," logins. If we use the key to authenticate, so the 2FA is no longer needed."]}),"\n",(0,i.jsxs)(s.li,{children:["2FA requires ",(0,i.jsx)(s.strong,{children:"manual setup for each user"}),", making it ",(0,i.jsx)(s.strong,{children:"less practical"})," in automated or multi-user environments. The QR code should not be shared via unencrypted protocol. Unliked the public key, it is very hard for hacker to get the private key from public key."]}),"\n",(0,i.jsxs)(s.li,{children:["In case of ",(0,i.jsx)(s.strong,{children:"device loss or failure"}),", recovery is more complex compared to SSH key backups."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"YOUR LOGIN VIA PASSWORD WILL BE SAFE IF YOU DON'T USE IT"})})}),"\n",(0,i.jsxs)(s.h3,{id:"5-conclusion",children:["5 ",(0,i.jsx)(s.strong,{children:"Conclusion"})]}),"\n",(0,i.jsxs)(s.p,{children:["By using ",(0,i.jsx)(s.strong,{children:"SSH key authentication"})," and ",(0,i.jsx)(s.strong,{children:"disabling password login"}),", we eliminate brute-force risks ",(0,i.jsx)(s.strong,{children:"without"})," the need for additional security layers like Fail2Ban or 2FA. \ud83d\ude80"]}),"\n",(0,i.jsx)(s.h2,{id:"basic-commands-for-remote-usage",children:(0,i.jsx)(s.strong,{children:"Basic Commands for Remote Usage"})}),"\n",(0,i.jsx)(s.h3,{id:"check-system-resources",children:"Check system resources:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"htop   # View CPU & memory usage\nnvidia-smi  # Check GPU status (if available)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"transfer-files",children:"Transfer files:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"scp localfile.txt username@server_address:/path/to/destination\n"})}),"\n",(0,i.jsx)(s.h3,{id:"ssh-tunneling",children:(0,i.jsx)(s.strong,{children:"SSH Tunneling"})}),"\n",(0,i.jsxs)(s.p,{children:["SSH tunneling can be used to securely forward network traffic. There are two main types of tunnels: remote and local. Replace ",(0,i.jsx)(s.code,{children:"username"})," and ",(0,i.jsx)(s.code,{children:"domain"})," with your actual username and the domain of the server."]}),"\n",(0,i.jsx)(s.h4,{id:"remote-tunnel",children:(0,i.jsx)(s.strong,{children:"Remote Tunnel"})}),"\n",(0,i.jsx)(s.p,{children:"A remote tunnel forwards a port from the remote server to your local machine. This is useful when you want to access a service running on your local machine from the remote server."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh -N -R 9000:localhost:9999 username@domain\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example Use Case:"}),"\nYou have a Jupyter Notebook running on your remote server at port 9999, then you want to access the it at your local machine at ",(0,i.jsx)(s.code,{children:"http://localhost:9000"})]}),"\n",(0,i.jsx)(s.h4,{id:"local-tunnel",children:(0,i.jsx)(s.strong,{children:"Local Tunnel"})}),"\n",(0,i.jsx)(s.p,{children:"A local tunnel forwards a port from your local machine to the remote server. This is useful when you want to access a service running on the remote server from your local machine."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh -N -L 2222:localhost:22 username@domain\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example Use Case:"}),"\nNgrok service, it will tunnel the port ssh login to a remote server using a specific port. By using this, you do not need your remote server to be a public network with specific IP.\nNow you can login the local machine on remote server.\nTry this to login to your localhost via the port 2222 instead of 22 on it own. By default username will match with your current user."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh -N -L 2222:localhost:22 localhost\n"})}),"\n",(0,i.jsx)(s.p,{children:"Open a new terminal"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh -p 2222 localhost\n"})}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"cluster",src:n(5092).A+"",width:"1308",height:"386"})})}),"\n",(0,i.jsx)(s.h2,{id:"conclusion",children:(0,i.jsx)(s.strong,{children:"Conclusion"})}),"\n",(0,i.jsxs)(s.p,{children:["Using a remote server ensures ",(0,i.jsx)(s.strong,{children:"faster processing, reliable storage, and scalable computing power"}),", making it the best choice for resource-intensive tasks. Always follow best practices for ",(0,i.jsx)(s.strong,{children:"security and efficient resource usage"}),"."]}),"\n",(0,i.jsx)(s.hr,{})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1469:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/remote_server-8dd77a5f760e7d364bb93cda0db780d2.webp"},2761:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/no_password_login-a12b66e7ca1d0279829912396d73849f.png"},5092:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/local_tunnel-71eba47247c42fdea34f18dadfe5920c.png"},6838:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/pubkey_and_key_location-1f8bb5d461d06019fb8898369e36b059.png"},7133:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/copy_key_id-8614e939bde59a2a626d1848ec8ca059.png"},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}},9893:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/ssh_status-89644f7ef0449414c255ab716eb1bd67.png"}}]);