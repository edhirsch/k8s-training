# Kubernetes hands-on training for developers

## Table of contents
* [Getting Started](#getting-started)
* [Lesson 01 - Docker Images](#lesson-1---docker-images)
* [Lesson 02 - Kubernetes Command Line Interface](#lesson-2---kubernetes-command-line-interface)
* [Lesson 03 - Kubernetes Yaml Configuration Files](#lesson-3---kubernetes-yaml-configuration-files)
* [Lesson 04 - Namespaces](#lesson-4---namespaces)
* [Lesson 05 - Pods](#lesson-5---pods)
* [Lesson 06 - Workload Controllers](#lesson-6---workload-controllers)
* [Lesson 07 - Services and Endpoints](#lesson-7---services-and-endpoints)
* [Lesson 08 - ConfigMaps and Secrets](#lesson-8---configmaps-and-secrets)
* [Lesson 09 - PersistentVolumes, PersistentVolumeClaims and StorageClasses](#lesson-9---persistentvolumes-persistentvolumeclaims-and-storageclasses)
* [Lesson 10 - Helm, Ingress and Ingress Controllers](#lesson-10---helm-ingresses-and-ingress-controllers)
* [Lesson 11 - Resource Quotas, Requests and Limits](#lesson-11---resource-quotas-requests-and-limits)
* [Optional  - Official Documentation](#optional---kubernetes-official-documentation)

## Getting Started
### Required Tools
- Docker
- Kubernetes
- Git
- PyCharm or other IDE

### Installing Guides
- Docker Desktop -
  [Mac](https://docs.docker.com/docker-for-mac/install/)
  or
  [Windows](https://docs.docker.com/docker-for-windows/install/)
- Kubernetes in Docker Desktop -
  [Mac](https://docs.docker.com/docker-for-mac/#kubernetes)
  or
  [Windows](https://docs.docker.com/docker-for-windows/#kubernetes)
- Git -
  [Any](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- PyCharm -
  [Any](https://www.jetbrains.com/help/pycharm/installation-guide.html)
- PyCharm Kubernetes plugin -
  [Any](https://www.jetbrains.com/help/pycharm/kubernetes.html)
- Shell Autocompletion for Mac -
  [Docker](https://docs.docker.com/compose/completion/)
  or
  [Kubernetes](https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion)
- Vim Kubernetes Yaml Plugin -
  [Mac and Linux](https://octetz.com/docs/2020/2020-01-06-vim-k8s-yaml-support/)

---

## Lesson 1 - Docker Images
### Section 1.0 - Documentation and Training Resources
- Dockerfile Reference(https://docs.docker.com/engine/reference/builder/)
- Play with Docker(https://training.play-with-docker.com/ops-stage1/)
- Sails application(https://github.com/docker/labs/blob/master/developer-tools/nodejs/porting/1_node_application.md)

### Section 1.1 - Getting familiar with Docker

### Section 1.2 - Creating your Dockerfile
[Dockerfile](apps/messageApp/Dockerfile)
```sh
cd apps/messageApp
cat Dockerfile
```
### Section 1.3 - Building your image
```sh
docker build -t messageapp:0.1 .
```
### Section 1.4 - Running your application
#### Start the database
```sh
docker run -it -v ~/data:/data/db --name mongodb -p 27017:27017 -d mongo:4.2-bionic
```
#### Retrieve the database ip
```sh
docker inspect mongodb
```
#### Start the message application
```sh
docker run -d -p 1337:1337 -e MONGO_URL=mongodb://172.17.0.2/messageApp --name messageapp messageapp:0.1
```
### Section 1.5 - Testing your application
#### Create a message
```sh
curl -XPOST localhost:1337/message?text=<some text>
```
#### Read all messages
```sh
curl localhost:1337/message
```
#### Update a message
```sh
curl -XPUT http://localhost:1337/message/<id>?text=<new text>
```
#### Delete a message
```sh
curl -XPUT http://localhost:1337/message/<id>
```
### Assessment
- Build a docker image based on a sample web application which uses a database for storing data
- Configure and start the database
- Start the dockerized web application
- Test that the application is working properly

---

## Lesson 2 - Kubernetes Command Line Interface
### Section 2.0 - Documentation and Training Resources
- [kubectl overview](https://kubernetes.io/docs/reference/kubectl/overview/)
- [kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl command reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [working with imperative commands](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/imperative-command/)

### Section 2.1 - Kubectl Commands, Resources and Options
#### Syntax
```sh
kubectl [command] [TYPE] [NAME] [flags]
```

#### Command (operation)
- Specifies the operation that you want to perform on one or more resources 
- Example: create, get, describe, delete

#### Type
- Specifies the resource type 
- Resource types are case-insensitive and you can specify the singular, plural, or abbreviated forms

#### Name
- Specifies the name of the resource 
- Names are case-sensitive 
- If the name is omitted, details for all resources are displayed
- Different Types and Names can be used on the same line
```sh
kubectl get namespace/namespace1 pod/pod1
```

#### Flags (options)
- Specifies command flags
- There are common flags, but they can differ based on command and type

#### Output format
```sh
kubectl [command] [TYPE] [NAME] -o <output_format>
```

Common output formats:
- -o json - Output a JSON formatted API object.
- -o name - Print only the resource name and nothing else.
- -o wide - Output in the plain-text format with any additional information. For pods, the node name is included.
- -o yaml - Output a YAML formatted API object.

---

## Lesson 3 - Kubernetes Yaml Configuration Files
### Section 3.0 - Documentation and Training Resources
- [Yaml official documentation](https://yaml.org/)
- [Kubernetes objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/)
- [object management](https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/)
- [imperative object configuration](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/imperative-config/)
- [declarative object configuration](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)

### Section 3.1 - Yaml Resource Structure
#### Example
[example.yaml](3-yaml-configuration/example.yaml)
```sh
cat 3-yaml-configuration/example.yaml
```

### Section 3.2 - Working with Resources via Imperative Configuration
#### Use case
- works best with static resources
- works best with files

#### Create a resource
```sh
kubectl create -f 3-yaml-configuration/example.yaml
```

#### Update a resource
- requires the full definition 
```sh
kubectl get pod my-pod -o yaml | sed 's/image: centos/image: ubuntu/' | kubectl replace -f -
```

#### Delete a resource
```sh
kubectl delete -f 3-yaml-configuration/example.yaml
```

### Section 3.3 - Working with Resources via Declarative Configuration
#### Use case
- works best with dynamic resources
- works best with folders

#### Create a resource
```sh
kubectl apply -f 3-yaml-configuration/example.yaml
```

#### Update a resource
- requires partial definition 
```sh
kubectl apply -f 3-yaml-configuration/example_updated.yaml
```

#### Delete a resource
```sh
kubectl delete -f 3-yaml-configuration/example.yaml
```

### Assessment

- Create other example files
- Create, update, verify and delete the resources using both imperative and declarative configuration
- Use commands from lesson 2 to verify

---

## Lesson 4 - Namespaces
### Section 4.0 - Documentation and Training Resources
- [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
- [Context](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#kubectl-context-and-configuration)

### Section 4.1 - Managing Namespaces using Commands
#### Create namespace
```sh
kubectl create namespace my-namespace
```
#### List namespaces
```sh
kubectl get namespaces
kubectl get namespace my-namespace
```
#### Delete namespace
```sh
kubectl delete namespace
```
### Section 4.2 - Managing Namespaces using Yaml Configuration Files
#### Create namespace
[namespace.yaml](4-namespaces/namespace.yaml)
```sh
cat 4-namespaces/namespace.yaml
kubectl create -f 4-namespaces/namespace.yaml
kubectl apply -f 4-namespaces/namespace.yaml
```

#### Delete namespace
```sh
kubectl delete -f 4-namespaces/namespace.yaml
```

### Section 4.3 - Global vs Namespaced and Context Switching
#### Create a pod in the default namespace
```sh
kubectl apply -f 3-yaml-configuration/example.yaml
```

#### Create a user namespace with a pod
```sh
kubectl apply -f 4-namespaces/namespace.yaml
kubectl apply -f 4-namespaces/example.yaml
```

#### List pods in the default and user namespaces
```sh
kubectl get pods
kubectl get pods -n my-namespace
```

### Context switching
#### List contexts
```sh
kubectl config get-contexts
```

#### Create context for a specific user, cluster and namespace
```sh
kubectl config set-context my --user=docker-desktop --cluster=docker-desktop --namespace=my-namespace
```

#### Switch context
```sh
kubectl config use-context my
```

#### Delete context
```sh
kubectl config delete-context my
```

### Assessment
- Create a namespace using each method
- Add resources to each namespace
- Create contexts for each namespace
- List resources for each namespace via contexts or other means

---

## Lesson 5 - Pods
### Section 5.0 - Documentation and Training Resources
- [Pods](https://kubernetes.io/docs/concepts/workloads/pods/)

### Section 5.1 - Creating Pods using Commands
#### Syntax
```sh
kubectl run [<pod_name>] [<run_options>] --image=<image> [-- <args>]
```
- image - the docker image to use (mandatory)
- run_options - runtime options like stdin, attach, tty, env, port, command 
  -  see "kubectl run --help" for short versions and details
- pod_name - the Pod name (optional)
  - will use the command as a Pod name if not specified) 
- args - override the default image command and arguments (optional)
  - if the --command is specified in the run_options, all are treated as arguments for that command

#### Create an example pod
```sh
kubectl run my-pod -it --image=centos -- bash
```

### Section 5.2 - Creating Pods using Yaml Configuration Files
#### Single container Pod
[pod_single_container.yaml](5-pods/pod_single_container.yaml)
```sh
cat 5-pods/pod_single_container.yaml
kubectl apply -f 5-pods/pod_single_container.yaml
```

#### Multi container Pod
[pod_multi_container.yaml](5-pods/pod_multi_container.yaml)
```sh
cat 5-pods/pod_multi_container.yaml
kubectl apply -f 5-pods/pod_multi_container.yaml
```

#### Application Pod
[pod_full.yaml](5-pods/pod_full.yaml)
```sh
cat 5-pods/pod_full.yaml
kubectl apply -f 5-pods/pod_full.yaml
```

### Section 5.3 - Debugging Single and Multi container Pods
#### Check the Pod status
```sh
kubectl get pods
```

#### Check the Pod details
```sh
kubectl describe pod single-container-pod
kubectl describe pod multi-container-pod
```

#### Check the Pod logs
- for single container Pods, the container logs for that container will be shown
- for multi container Pods, you must specify the container name
```sh
kubectl logs single-container-pod
kubectl logs multi-container-pod -c centos1
kubectl logs multi-container-pod -c centos2
kubectl logs multi-container-pod -c ubuntu1
kubectl logs multi-container-pod -c ubuntu2
```

### Section 5.5 - Removing Pods
#### Remove Pods via commands
```sh
kubectl delete pods single-container-pod multi-container-pod message-app
kubectl delete pods/single-container-pod pods/multi-container-pod pods/message-app
```

#### Remove Pods via configuration files
```sh
kubectl delete -f 5-pods/pod_single_container.yaml,5-pods/pod_multi_container.yaml,5-pods/pod_full.yaml
kubectl delete -f 5-pods/
```

---

## Lesson 6 - Workload Controllers
### Section 6.0 - Documentation and Training Resources
- [Workload Controllers](https://kubernetes.io/docs/concepts/workloads/controllers/)
- [initContainers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)

### Section 6.1 - Types of Workload Controllers
- ReplicaSet - maintains and guarantees a specified set of identical replica Pods
- Deployments - provides declarative updates for Pods and ReplicaSets by changing the actual to a desired state using a controlled rate
- StatefulSets - maintains the ordered deployment and scaling of a set of Pods, and provides uniqueness for these Pods
- DaemonSet - maintains a copy of the Pod on each node, and scales automatically with the nodes 
- Jobs - creates one or more Pods in parallel until a specified number of successfully completed Pods is reached
- CronJobs - creates Jobs on a repeating schedule, similar to linux cron jobs

### Section 6.2 - Starting the Web Application via a Deployment
#### Deploy the application with basic configuration
[deployment_base.yaml](6-controllers/deployment_base.yaml)
```sh
cat 6-controllers/deployment_base.yaml
kubectl apply -f 6-controllers/deployment_base.yaml
```

#### Deploy the application with advanced configuration
[deployment_full.yaml](6-controllers/deployment_full.yaml)
```sh
cat 6-controllers/deployment_full.yaml
kubectl apply -f 6-controllers/deployment_full.yaml
```

### Section 6.3 - Starting the Database via a StatefulSet
[statefulset_mongo.yaml](6-controllers/statefulset_mongodb.yaml)
```sh
cat 6-controllers/deployment_full.yaml
kubectl apply -f 6-controllers/deployment_full.yaml
```

### Section 6.4 - Adding Init containers
[deployment_full_init.yaml](6-controllers/deployment_full_init.yaml)
```sh
cat 6-controllers/deployment_full_init.yaml
kubectl apply -f 6-controllers/deployment_full_init.yaml
```

---

## Lesson 7 - Services and Endpoints
### Section 7.0 - Documentation and Training Resources
- [Services and Endpoints](https://kubernetes.io/docs/concepts/services-networking/service/)

### Section 7.1 - Service Types
#### ClusterIP
- expose the service using a cluster-only IP
- the service will be available only within the cluster
- this is the default service type

#### NodePort
- expose the service using the node IP and a static port (default range: 30000-32767)
- the service will be available using the node IP and port

#### LoadBalancer
- export the service using a cloud provider Load Balancer

### Section 7.2 - Exposing via a Service
#### Cluster-only database
[service_mongodb_selector.yaml](7-services/service_mongodb_selector.yaml)
```sh
cat 7-services/service_mongodb_selector.yaml
```

#### External application
[service_nodeport_selector.yaml](7-services/service_nodeport_selector.yaml)
```sh
cat 7-services/service_nodeport_selector.yaml
```

### Section 7.3 - Incorporating outside Applications in Kubernetes clusters via Endpoints
[service_endpoint_mongodb.yaml](7-services/service_endpoint_mongodb.yaml)
```sh
cat 7-services/service_endpoint_mongodb.yaml
```

### Section 7.4 - Testing the Web Application
```sh
curl -XPOST localhost:31337/message?text=HeyStranger
curl localhost:31337/message
```

---

## Lesson 8 - ConfigMaps and Secrets
### Section 8.0 - Documentation and Training Resources
- [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)
- [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)

### Section 8.1 - Adding variables to ConfigMaps
[configmap.yaml](8-configmaps-secrets/configmap.yaml)
```sh
cat 8-configmaps-secrets/configmap.yaml
```

### Section 8.2 - Using ConfigMaps as environment variables
[deployment_full_config.yaml](6-controllers/deployment_full_config.yaml)
```sh
cat 6-controllers/deployment_full_config.yaml
kubectl apply -f 6-controllers/deployment_full_config.yaml
```

### Section 8.3 - ConfigMaps vs Secrets
[configmap_no_password.yaml](8-configmaps-secrets/configmap_no_password.yaml)
[secret.yaml](8-configmaps-secrets/secret.yaml)
[configmap.yaml](6-controllers/deployment_full_config_secret.yaml)
```sh
cat 8-configmaps-secrets/configmap_no_password.yaml
cat 8-configmaps-secrets/secret.yaml
cat 6-controllers/deployment_full_config_secret.yaml
kubectl apply -f configmaps-secrets/configmap_no_password.yaml -f 8-configmaps-secrets/secret.yaml -f 6-controllers/deployment_full_config.yaml
```

---

## Lesson 9 - PersistentVolumes, PersistentVolumeClaims and StorageClasses
### Section 9.0 - Documentation and Training Resources
- [PersistentVolumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
- [StorageClasses](https://kubernetes.io/docs/concepts/storage/storage-classes/)

### Section 9.1 - Creating PersistentVolumes based on local disks
[persistentvolume_mongodb.yaml](9-pv-pvc-sc/persistentvolume_mongodb.yaml)
```sh
cat 9-pv-pvc-sc/persistentvolume_mongodb.yaml
```

### Section 9.2 - Claiming PersistentVolumes using PersistentVolumeClaims
#### Create the PersistentVolumeClaim
[persistentvolumeclaim_mongodb.yaml](9-pv-pvc-sc/persistentvolumeclaim_mongodb.yaml)
```sh
cat 9-pv-pvc-sc/persistentvolumeclaim_mongodb.yaml
kubectl apply -f 9-pv-pvc-sc/persistentvolumeclaim_mongodb.yaml
```

#### Create the Pods using PersistentVolumeClaims
[statefulset_mongodb_pv_pvc.yaml](6-controllers/statefulset_mongodb_pv_pvc.yaml)
```sh
cat 6-controllers/statefulset_mongodb_pv_pvc.yaml
kubectl apply -f 6-controllers/statefulset_mongodb_pv_pvc.yaml
```

### Section 9.3 - Claiming PersistentVolumes in Pods using VolumeClaimTemplates
#### Create the Pods using volumeClaimTemplates
[statefulset_mongodb_pv_tmpl.yaml](6-controllers/statefulset_mongodb_pv_tmpl.yaml)
```sh
cat 6-controllers/statefulset_mongodb_pv_tmpl.yaml
kubectl apply -f 6-controllers/statefulset_mongodb_pv_tmpl.yaml
```

### Section 9.4 - Mounting Volumes in Pods
```sh
cat 6-controllers/statefulset_mongodb_pv_tmpl.yaml
```


### Section 9.5 - Dynamic provisioning of Volumes using StorageClasses

---

## Lesson 10 - Helm, Ingresses and Ingress Controllers
### Section 10.0 - Documentation and Training Resources
- [Helm](https://helm.sh/docs/)
- [Helm Installation](https://helm.sh/docs/intro/install/)
- [nginx chart](https://github.com/kubernetes/ingress-nginx/tree/master/charts/ingress-nginx)
- [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

### Section 10.1 - Deploying the NginX Ingress Controller using Helm
#### Adding the ingress-nginx Helm repository
```sh
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
```

#### Installing the Ingress Controller
```sh
helm install ingress-nginx ingress-nginx/ingress-nginx -f helm/ingress-nginx/values.yaml
```
    
### Section 10.2 - Instaling a base NginX Ingress

### Section 10.3 - Improving the NginX Ingress

---

## Lesson 11 - Resource Quotas, Requests and Limits
### Section 11.0 - Documentation and Training Resources
- [ResourceQuotas](https://kubernetes.io/docs/concepts/policy/resource-quotas/)
- [Requests and Limits](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)

### Section 11.1 - Adding Resource Quotas to Namespaces

### Section 11.2 - Adding Resource Limits and Requests to Pods

### Section 11.3 - Testing Quotas

---

## Optional - Kubernetes Official Documentation
### Documentation
- [what is Kubernetes ?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Kubernetes tasks](https://kubernetes.io/docs/tasks/)


