# Kubernetes hands-on training

---

## Prerequisites
### Install Docker Desktop
- [MacOS](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://docs.docker.com/docker-for-windows/install/)

---

### Enable Kubernetes in Docker Desktop
- [MacOS](https://docs.docker.com/docker-for-mac/#kubernetes)
- [Windows](https://docs.docker.com/docker-for-windows/#kubernetes)

---

**OPTIONAL**
- [enable kubectl shell autocompletion on MacOS](https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion)
- [install PyCharm Kubernetes plugin](https://www.jetbrains.com/help/pycharm/kubernetes.html)
- [install vim Kubernetes yaml plugin](https://octetz.com/docs/2020/2020-01-06-vim-k8s-yaml-support/)

---

## Useful commands

### Nodes

#### List nodes
    kubectl get nodes
    kubectl get nodes -o wide

---

### Pods
#### List pods
    kubectl get pods
    kubectl get pods -o wide
    kubectl get pods --show-labels
    kubectl get pods -l labelname=labelvalue
    kubectl get pods --all-namespaces

---

### Services
#### List services
    kubectl get service
    kubectl get service -o wide

