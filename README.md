# Kubernetes hands-on training for developers

## Table of contents
* [Getting Started](#getting-started)
* [Course 01 - Prepare Docker Images](#prepare-docker-images)
* 

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

### Section 1.1 - Getting familiar with Docker

### Section 1.2 - Creating your Dockerfile
TODO: Add sample web applications with database

### Section 1.3 - Building your image

### Section 1.4 - Running your application

### Section 1.5 - Testing your application

### Section 1.6 - Optimizing your image

### Assessment
- Build a docker image based on a sample web application using a database
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

### Section 2.2 - Working with Resources via Commands

---

## Lesson 3 - Kubernetes Yaml Configuration Files
### Section 3.0 - Documentation and Training Resources
- [Yaml official documentation](https://yaml.org/)
- [Kubernetes objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/)
- [imperative object configuration](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/imperative-config/)
- [declarative object configuration](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)

### Section 3.1 - Basic Yaml Resource Structure

### Section 3.2 - Working with Resources via Imperative Configuration

### Section 3.3 - Working with Resources via Declarative Configuration

---

## Lesson 4 - Namespaces
### Section 4.0 - Documentation and Training Resources

### Section 4.1 - Creating Namespaces using Commands

### Section 4.2 - Creating Namespaces using Yaml Configuration Files

### Section 4.3 - Global vs Namespaced and Context Switching

---

## Lesson 5 - Pods
### Section 5.0 - Documentation and Training Resources

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
- [Services](https://kubernetes.io/docs/concepts/services-networking/service/)

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

## Lesson 11 - Resource Quotas and Limits
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


