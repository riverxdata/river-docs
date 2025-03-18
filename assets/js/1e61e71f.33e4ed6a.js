"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[179],{114:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/grafana-7dace9efecdbf46b14c5e25c659f17ad.png"},1013:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/NFS-41d4079c304dac75689e6ecdc6063d02.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},8537:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"high-performance-computing/how-to-build-slurm-scalable-using-ansible/overview","title":"Overview","description":"Summary on how does the industrial scale HPC work","source":"@site/docs/3.high-performance-computing/4.how-to-build-slurm-scalable-using-ansible/1.overview.md","sourceDirName":"3.high-performance-computing/4.how-to-build-slurm-scalable-using-ansible","slug":"/high-performance-computing/how-to-build-slurm-scalable-using-ansible/overview","permalink":"/river-docs/docs/high-performance-computing/how-to-build-slurm-scalable-using-ansible/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/riverxdata/docs/3.high-performance-computing/4.how-to-build-slurm-scalable-using-ansible/1.overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Scalable HPC","permalink":"/river-docs/docs/category/scalable-hpc"},"next":{"title":"Deployment","permalink":"/river-docs/docs/high-performance-computing/how-to-build-slurm-scalable-using-ansible/deployment"}}');var i=s(4848),t=s(8453);const o={},l="Overview",a={},c=[{value:"1. Head Node (Controller-Login)",id:"1-head-node-controller-login",level:2},{value:"2. Compute Nodes",id:"2-compute-nodes",level:2},{value:"3. Shared File System (NFS)",id:"3-shared-file-system-nfs",level:2},{value:"4. User Management",id:"4-user-management",level:2},{value:"5. Monitor",id:"5-monitor",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsx)(n.p,{children:"Summary on how does the industrial scale HPC work"}),"\n",(0,i.jsx)(n.h2,{id:"1-head-node-controller-login",children:"1. Head Node (Controller-Login)"}),"\n",(0,i.jsx)(n.p,{children:"The head node is responsible for managing the SLURM scheduler, job queue, and user authentication. Key services running on the head node include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SLURM Controller (slurmctld)"}),": Centralized SLURM job manager."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SLURM Database (slurmdbd)"}),": Stores accounting and job history."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NFS Server"}),": Exposes shared directories to all compute nodes."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-compute-nodes",children:"2. Compute Nodes"}),"\n",(0,i.jsx)(n.p,{children:"Compute nodes are responsible for executing jobs submitted to the SLURM scheduler. Each compute node runs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SLURM Compute Daemon (slurmd)"}),": ",(0,i.jsx)(n.strong,{children:"Handles"})," job execution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NFS Client"}),": Mounts shared storage from the NFS server."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-shared-file-system-nfs",children:"3. Shared File System (NFS)"}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cluster",src:s(1013).A+"",width:"1200",height:"675"})})}),"\n",(0,i.jsxs)(n.p,{children:["Source: ",(0,i.jsx)(n.a,{href:"https://thuanbui.me/cai-dat-nfs-server-va-nfs-client-tren-ubuntu-22-04/",children:"https://thuanbui.me/cai-dat-nfs-server-va-nfs-client-tren-ubuntu-22-04/"})]}),"\n",(0,i.jsx)(n.p,{children:"NFS provides a shared directory structure to ensure uniform access to data across nodes. Key directories:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/home"}),": User home directories with frequently and quick access (SSD NVMe)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/mnt/"}),": Possible hard drive with large storage (like HDD)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-user-management",children:"4. User Management"}),"\n",(0,i.jsx)(n.p,{children:"User authentication and identity management should be centralized using the user mangement systems like NIS/LDAP.\nHowever, these set up are not easy to configure. To simplify the cluster, the linux users, the slurm users will be\ncreated using the ansible playbook with matched UID and GID."}),"\n",(0,i.jsx)(n.h2,{id:"5-monitor",children:"5. Monitor"}),"\n",(0,i.jsx)("figure",{markdown:"span",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cluster",src:s(114).A+"",width:"1168",height:"863"})})}),"\n",(0,i.jsxs)(n.p,{children:["Source: ",(0,i.jsx)(n.a,{href:"https://swsmith.cc/posts/grafana-slurm.html",children:"https://swsmith.cc/posts/grafana-slurm.html"})]}),"\n",(0,i.jsxs)(n.p,{children:["All of the nodes need to be monitored via the ",(0,i.jsx)(n.code,{children:"prometheus"})," (metrics) and ",(0,i.jsx)(n.code,{children:"grafana"})," (visualization). Using the alertmanager with slack api for notifications"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);