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
    cd apps/messageApp
    cat Dockerfile

### Section 1.3 - Building your image
    docker build -t messageapp:0.1 .

### Section 1.4 - Running your application
#### Start the database
    docker run -it -v ~/data:/data/db --name mongodb -p 27017:27017 -d mongo:4.2-bionic
#### Retrieve the database ip
    docker inspect mongodb
#### Start the message application
    docker run -d -p 1337:1337 -e MONGO_URL=mongodb://172.17.0.2/messageApp --name message messageapp:0.1

### Section 1.5 - Testing your application
#### Create a message
    curl -XPOST localhost:1337/message?text=<some text>
#### Read all messages
    curl localhost:1337/message
#### Update a message
    curl -XPUT http://localhost:1337/message/<id>?text=<new text>
#### Delete a message
    curl -XPUT http://localhost:1337/message/<id>

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
    kubectl [command] [TYPE] [NAME] [flags]

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
  
    kubectl get namespace/namespace1 pod/pod1

#### Flags (options)
- Specifies command flags
- There are common flags, but they can differ based on command and type

#### Output format
    kubectl [command] [TYPE] [NAME] -o <output_format>

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
    cat 3-yaml-configuration/example.yaml

### Section 3.2 - Working with Resources via Imperative Configuration
#### Use case
- works best with static resources
- works best with files

#### Create a resource
    kubectl create -f 3-yaml-configuration/example.yaml

#### Update a resource
- requires the full definition 
```sh
kubectl get pod my-pod -o yaml | sed 's/image: centos/image: ubuntu/' | kubectl replace -f -
```

#### Delete a resource
    kubectl delete -f 3-yaml-configuration/example.yaml

### Section 3.3 - Working with Resources via Declarative Configuration
#### Use case
- works best with dynamic resources
- works best with folders

#### Create a resource
    kubectl apply -f 3-yaml-configuration/example.yaml

#### Update a resource
- requires partial definition 
```sh
kubectl apply -f 3-yaml-configuration/example_updated.yaml
```

#### Delete a resource
    kubectl delete -f 3-yaml-configuration/example.yaml

### Assessment

- create other example files
- create, update, verify and delete the resources using both imperative and declarative configuration
- use commands from lesson 2 to verify

---

## Lesson 4 - Namespaces
### Section 4.0 - Documentation and Training Resources
- [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
- [Context](https://kubernetes.io/docs/reference/kubectl/cheatsheet/#kubectl-context-and-configuration)

### Section 4.1 - Managing Namespaces using Commands
#### Create namespace
    kubectl create namespace my-namespace
#### List namespaces
    kubectl get namespaces
    kubectl get namespace my-namespace
#### Delete namespace
    kubectl delete namespace

### Section 4.2 - Managing Namespaces using Yaml Configuration Files
#### Create namespace
    kubectl create -f 4-namespaces/namespace.yaml
    kubectl apply -f 4-namespaces/namespace.yaml

#### Delete namespace
    kubectl delete -f 4-namespaces/namespace.yaml

### Section 4.3 - Global vs Namespaced and Context Switching
#### Create a pod in the default namespace
    kubectl apply -f 3-yaml-configuration/example.yaml
#### Create a user namespace with a pod
    kubectl apply -f 4-namespaces/namespace.yaml
    kubectl apply -f 4-namespaces/example.yaml
#### List pods in the default and user namespaces
    kubectl get pods
    kubectl get pods -n my-namespace

### Context switching
#### List contexts
    kubectl config get-contexts
#### Create context for a specific user, cluster and namespace
    kubectl config set-context my --user=docker-desktop --cluster=docker-desktop --namespace=my-namespace
#### Switch context
    kubectl config use-context my
#### Delete context
    kubectl config delete-context my

---

## Lesson 5 - Pods
### Section 5.0 - Documentation and Training Resources
- [Pods](https://kubernetes.io/docs/concepts/workloads/pods/)

### Section 5.1 - Containers vs Pods

### Section 5.2 - Creating Pods using Commands

### Section 5.3 - Creating Pods using Yaml Configuration Files

### Section 5.4 - Debugging Pods

### Section 5.5 - Removing Pods

---

## Lesson 6 - Workload Controllers
### Section 6.0 - Documentation and Training Resources
- [Workload Controllers](https://kubernetes.io/docs/concepts/workloads/controllers/)

### Section 6.1 - What is a Workload Controller?

### Section 6.2 - Types of Workload Controllers

### Section 6.3 - Starting the Web Application via a Deployment

### Section 6.4 - Starting the Database via a StatefulSet

### Section 6.5 - Testing the Web Application

---

## Lesson 7 - Services and Endpoints
### Section 7.0 - Documentation and Training Resources
- [Services and Endpoints](https://kubernetes.io/docs/concepts/services-networking/service/)

### Section 7.1 - Types of Services

### Section 7.2 - Exposing an Application via a Service

### Section 7.3 - Incorporating outside Applications in Kubernetes clusters via Endpoints

---

## Lesson 8 - ConfigMaps and Secrets
### Section 8.0 - Documentation and Training Resources
- [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)
- [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)

### Section 8.1 - Adding variables to ConfigMaps

### Section 8.2 - Using ConfigMaps as environment variables

### Section 8.3 - Using ConfigMaps as configuration files in volumes

### Section 8.4 - ConfigMaps vs Secrets

---

## Lesson 9 - PersistentVolumes, PersistentVolumeClaims and StorageClasses
### Section 9.0 - Documentation and Training Resources
- [PersistentVolumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
- [StorageClasses](https://kubernetes.io/docs/concepts/storage/storage-classes/)

### Section 9.1 - Creating PersistentVolumes based on local disks

### Section 9.2 - Binding PersistentVolumes using PersistentVolumeClaims

### Section 9.3 - Mounting Volumes in Pods

### Section 9.4 - Dynamic provisioning of Volumes using StorageClasses

---

## Lesson 10 - Helm, Ingresses and Ingress Controllers
### Section 10.0 - Documentation and Training Resources
- [Helm](https://helm.sh/docs/)
- [Helm Installation](https://helm.sh/docs/intro/install/)
- [nginx chart](https://github.com/kubernetes/ingress-nginx/tree/master/charts/ingress-nginx)
- [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

### Section 10.1 - Deploying the NginX Ingress Controller using Helm
#### Adding the ingress-nginx Helm repository
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
#### Installing the Ingress Controller
    helm install ingress-nginx ingress-nginx/ingress-nginx -f helm/ingress-nginx/values.yaml

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


