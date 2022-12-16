"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:4,sidebar_label:"EMR on EKS with FSx for Lustre"},o="EMR on EKS with FSx for Lustre",i={unversionedId:"amazon-emr-on-eks/emr-eks-fsx-for-lustre",id:"amazon-emr-on-eks/emr-eks-fsx-for-lustre",title:"EMR on EKS with FSx for Lustre",description:"Introduction",source:"@site/docs/amazon-emr-on-eks/emr-eks-fsx-for-lustre.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/emr-eks-fsx-for-lustre",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-fsx-for-lustre",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/emr-eks-fsx-for-lustre.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"EMR on EKS with FSx for Lustre"},sidebar:"docs",previous:{title:"EMR on EKS with Apache Yunikorn",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-yunikorn"},next:{title:"ACK for EMR on EKS",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-ack-crossplane"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:2},{value:"Spark Job Execution - FSx for Lustre Static Provisioning",id:"spark-job-execution---fsx-for-lustre-static-provisioning",level:2},{value:"Spark Job Execution - FSx for Lustre Dynamic Provisioning",id:"spark-job-execution---fsx-for-lustre-dynamic-provisioning",level:2},{value:"Cleanup",id:"cleanup",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emr-on-eks-with-fsx-for-lustre"},"EMR on EKS with FSx for Lustre"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Amazon FSx for Lustre is a fully managed shared storage option built on the world\u2019s most popular high-performance file system. It offers highly scalable, cost-effective storage, which provides sub-millisecond latencies, millions of IOPS, and throughput of hundreds of gigabytes per second. Its popular use cases include high-performance computing (HPC), financial modeling, video rendering, and machine learning. FSx for Lustre supports two types of deployments:"),(0,n.kt)("p",null,"For storage, EMR on EKS supports node ephemeral storage using ",(0,n.kt)("inlineCode",{parentName:"p"},"hostPath")," where the storage is attached to individual nodes, and Amazon Elastic Block Store (Amazon EBS) volume per executor/driver pod using dynamic ",(0,n.kt)("inlineCode",{parentName:"p"},"Persistent Volume Claims"),".\nHowever, some Spark users are looking for an ",(0,n.kt)("strong",{parentName:"p"},"HDFS-like shared file system")," to handle specific workloads like time-sensitive applications or streaming analytics."),(0,n.kt)("p",null,"In this example, you will learn how to deploy, configure and use FSx for Lustre as a shuffle storage for running Spark jobs with EMR on EKS."),(0,n.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,n.kt)("p",null,"In this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/emr-eks-fsx-lustre"},"example"),", you will provision the following resources required to run Spark Jobs using EMR on EKS with FSx for Lustre as shuffle storage, as well as monitor spark job metrics using ",(0,n.kt)("strong",{parentName:"p"},"Amazon Managed Prometheus")," and ",(0,n.kt)("strong",{parentName:"p"},"Amazon Managed Grafana"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only) with two managed node groups"),(0,n.kt)("li",{parentName:"ul"},"Deploys Metrics server with HA, Cluster Autoscaler, Prometheus, VPA, CoreDNS Autoscaler, FSx CSI driver"),(0,n.kt)("li",{parentName:"ul"},"EMR on EKS Teams and EMR Virtual cluster for ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,n.kt)("li",{parentName:"ul"},"Creates Amazon managed Prometheus Endpoint and configures Prometheus Server addon with remote write configuration to Amazon Managed Prometheus"),(0,n.kt)("li",{parentName:"ul"},"Creates PERSISTENT type FSx for Lustre filesystem, Static Persistent volume and Persistent volume claim"),(0,n.kt)("li",{parentName:"ul"},"Creates Scratch type FSx for Lustre filesystem with dynamic Persistent volume claim"),(0,n.kt)("li",{parentName:"ul"},"S3 bucket to sync FSx for Lustre filesystem data")),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,n.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: Currently Amazon Managed Prometheus supported only in selected regions. Please see this ",(0,n.kt)("a",{parentName:"em",href:"https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html"},"userguide")," for supported regions.")),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate into one of the example directories and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/emr-eks-fsx-lustre\nterraform init\n")),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and Run",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan")," to verify the resources created by this execution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION="us-west-2" # Change according to your need\nterraform plan\n')),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,n.kt)("h2",{id:"verify-the-resources"},"Verify the resources"),(0,n.kt)("p",null,"Let\u2019s verify the resources created by ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."),(0,n.kt)("p",null,"Verify the Amazon EKS Cluster and Amazon Managed service for Prometheus"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name emr-eks-fsx-lustre\n\naws amp list-workspaces --alias amp-ws-emr-eks-fsx-lustre\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Verify EMR on EKS Namespaces emr-data-team-a and emr-data-team-b and Pod status for Prometheus, Vertical Pod Autoscaler, Metrics Server and Cluster Autoscaler.\n\naws eks --region us-west-2 update-kubeconfig --name emr-eks-fsx-lustre # Creates k8s config file to authenticate with EKS Cluster\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\nkubectl get ns | grep emr-data-team # Output shows emr-data-team-a and emr-data-team-b namespaces for data teams\n\nkubectl get pods --namespace=prometheus # Output shows Prometheus server and Node exporter pods\n\nkubectl get pods --namespace=vpa  # Output shows Vertical Pod Autoscaler pods\n\nkubectl get pods --namespace=kube-system | grep  metrics-server # Output shows Metric Server pod\n\nkubectl get pods --namespace=kube-system | grep  cluster-autoscaler # Output shows Cluster Autoscaler pod\n\nkubectl get pods -n kube-system | grep fsx # Output of the FSx controller and node pods\n\nkubectl get pvc -n emr-data-team-a  # Output of persistent volume for static(`fsx-static-pvc`) and dynamic(`fsx-dynamic-pvc`)\n\n#FSx Storage Class\nkubectl get storageclasses | grep fsx\n  emr-eks-fsx-lustre   fsx.csi.aws.com         Delete          Immediate              false                  109s\n\n# Output of static persistent volume with name `fsx-static-pv`\nkubectl get pv | grep fsx  \n  fsx-static-pv                              1000Gi     RWX            Recycle          Bound    emr-data-team-a/fsx-static-pvc       fsx\n\n# Output of static persistent volume with name `fsx-static-pvc` and `fsx-dynamic-pvc`\n# Pending status means that the FSx for Lustre is still getting created. This will be changed to bound once the filesystem is created. Login to AWS console to verify.\nkubectl get pvc -n emr-data-team-a | grep fsx\n  fsx-dynamic-pvc   Pending                                             fsx            4m56s\n  fsx-static-pvc    Bound     fsx-static-pv   1000Gi     RWX            fsx            4m56s\n\n")),(0,n.kt)("h2",{id:"spark-job-execution---fsx-for-lustre-static-provisioning"},"Spark Job Execution - FSx for Lustre Static Provisioning"),(0,n.kt)("p",null,"Execute Spark Job by using ",(0,n.kt)("inlineCode",{parentName:"p"},"FSx for Lustre")," with statically provisioned volume.\nExecute the Spark job using the below shell script."),(0,n.kt)("p",null,"This script requires three input parameters which can be extracted from ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply")," output values."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"EMR_VIRTUAL_CLUSTER_ID=$1     # Terraform output variable is emrcontainers_virtual_cluster_id\nS3_BUCKET=$2                  # This script requires s3 bucket as input parameter e.g., s3://<bucket-name>\nEMR_JOB_EXECUTION_ROLE_ARN=$3 # Terraform output variable is emr_on_eks_role_arn\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This shell script downloads the test data to your local machine and uploads to S3 bucket. Verify the shell script before running the job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cd data-on-eks/analytics/emr-eks-fsx-lustre/examples/spark-execute/\n\n./fsx-static-spark.sh "<ENTER_EMR_VIRTUAL_CLUSTER_ID>" "s3://<ENTER-YOUR-BUCKET-NAME>" "<EMR_JOB_EXECUTION_ROLE_ARN>"\n')),(0,n.kt)("p",null,"Verify the job execution events"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=emr-data-team-a -w\n")),(0,n.kt)("p",null,"This will show the mounted ",(0,n.kt)("inlineCode",{parentName:"p"},"/data")," directory with FSx DNS name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -ti ny-taxi-trip-static-exec-1 -c analytics-kubernetes-executor -n emr-data-team-a -- df -h\n\nkubectl exec -ti ny-taxi-trip-static-exec-1 -c analytics-kubernetes-executor -n emr-data-team-a -- ls -lah /static\n")),(0,n.kt)("h2",{id:"spark-job-execution---fsx-for-lustre-dynamic-provisioning"},"Spark Job Execution - FSx for Lustre Dynamic Provisioning"),(0,n.kt)("p",null,"Execute Spark Job by using FSx for Lustre with dynamically provisioned volume and Fsx for Lustre file system"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This script requires three input parameters in which ",(0,n.kt)("inlineCode",{parentName:"li"},"EMR_VIRTUAL_CLUSTER_ID")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"EMR_JOB_EXECUTION_ROLE_ARN")," values can be extracted from ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform apply")," output values."),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("inlineCode",{parentName:"li"},"S3_BUCKET"),", Either create a new S3 bucket or use an existing S3 bucket to store the scripts, input and output data required to run this sample job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"EMR_VIRTUAL_CLUSTER_ID=$1     # Terraform output variable is emrcontainers_virtual_cluster_id\nS3_BUCKET=$2                  # This script requires s3 bucket as input parameter e.g., s3://<bucket-name>\nEMR_JOB_EXECUTION_ROLE_ARN=$3 # Terraform output variable is emr_on_eks_role_arn\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This shell script downloads the test data to your local machine and uploads to S3 bucket. Verify the shell script before running the job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cd data-on-eks/analytics/emr-eks-fsx-lustre/examples/spark-execute/\n\n./fsx-dynamic-spark.sh "<ENTER_EMR_VIRTUAL_CLUSTER_ID>" "s3://<ENTER-YOUR-BUCKET-NAME>" "<EMR_JOB_EXECUTION_ROLE_ARN>"\n')),(0,n.kt)("p",null,"Verify the job execution events"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=emr-data-team-a -w\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -ti ny-taxi-trip-dyanmic-exec-1 -c analytics-kubernetes-executor -n emr-data-team-a -- df -h\n\nkubectl exec -ti ny-taxi-trip-dyanmic-exec-1 -c analytics-kubernetes-executor -n emr-data-team-a -- ls -lah /dyanmic\n")),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order."),(0,n.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks_blueprints" -auto-approve\nterraform destroy -target="module.vpc" -auto-approve\n')),(0,n.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}c.isMDXComponent=!0}}]);