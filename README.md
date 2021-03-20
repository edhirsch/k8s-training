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

### Lesson 1 - Docker Images
#### Section 1.0 - Documentation and Training Resources
- Dockerfile Reference(https://docs.docker.com/engine/reference/builder/)
- Play with Docker(https://training.play-with-docker.com/ops-stage1/)

#### Section 1.1 - Getting familiar with Docker

#### Section 1.2 - Creating your Dockerfile
TODO: Add sample web applications with database

#### Section 1.3 - Building your image

#### Section 1.4 - Running your application

#### Section 1.5 - Testing your application

#### Section 1.6 - Optimizing your image

#### Assessment
- Build a docker image based on a sample web application using a database
- Configure and start the database
- Start the dockerized web application
- Test that the application is working properly

---

### Lesson 2 - Kubernetes Command Line Interface
#### Section 2.0 - Documentation and Training Resources
- [kubectl overview](https://kubernetes.io/docs/reference/kubectl/overview/)
- [kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl command reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [working with imperative commands](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/imperative-command/)

#### Section 2.1 - Kubectl Commands, Resources and Options

#### Section 2.2 - Working with Resources via Commands

---

### Lesson 3 - Kubernetes Yaml Configuration Files
#### Section 3.0 - Documentation and Training Resources
- [Yaml official documentation](https://yaml.org/)
- [Kubernetes objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/)
- [imperative object configuration](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/imperative-config/)
- [declarative object configuration](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/)

#### Section 3.1 - Basic Yaml Resource Structure

#### Section 3.2 - Working with Resources via Imperative Configuration

#### Section 3.3 - Working with Resources via Declarative Configuration

---

### Lesson 4 - Namespaces
#### Section 4.0 - Documentation and Training Resources

#### Section 4.1 - Creating Namespaces using Commands

#### Section 4.2 - Creating Namespaces using Yaml Configuration Files

#### Section 4.3 - Global vs Namespaced and Context Switching

---

### Lesson 5 - Pods
#### Section 5.0 - Documentation and Training Resources

#### Section 5.1 - Containers vs Pods

#### Section 5.2 - Creating Pods using Commands

#### Section 5.3 - Creating Pods using Yaml Configuration Files

#### Section 5.4 - Debugging Pods

#### Section 5.5 - Removing Pods

---

### Lesson 6 - Workload Controllers
#### Section 6.0 - Documentation and Training Resources
- [Workload Controllers](https://kubernetes.io/docs/concepts/workloads/controllers/)

#### Section 6.1 - What is a Workload Controller?

#### Section 6.2 - Types of Workload Controllers

#### Section 6.3 - Starting the Web Application via a Deployment

#### Section 6.4 - Starting the Database via a StatefulSet

#### Section 6.5 - Testing the Web Application

---

### Lesson 7 - Services

---

### Lesson 8 - ConfigMaps and Secrets

---

### Lesson 9 - PersistentVolumes, PersistentVolumeClaims and StorageClasses

---

### Lesson 10 - Ingresses

---

### Lesson 11 - Quotas

---

### Optional - Kubernetes Official Documentation
#### Documentation
- [what is Kubernetes ?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
- [Kubernetes concepts](https://kubernetes.io/docs/concepts/)
- [Kubernetes tasks](https://kubernetes.io/docs/tasks/)


