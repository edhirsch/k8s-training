# Kubernetes hands-on training
## Prerequisites
### Install Docker Desktop
- [MacOS](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://docs.docker.com/docker-for-windows/install/)

---

### Enable Kubernetes in Docker Desktop
- [MacOS](https://docs.docker.com/docker-for-mac/#kubernetes)
- [Windows](https://docs.docker.com/docker-for-windows/#kubernetes)

---

### Prepare docker images
    cd _sails-workshop/
    docker build -f Dockerfile.frontend -t sails-workshop-frontend:1.0.0 .
    docker build -f Dockerfile.backend -t sails-workshop-backend:1.0.0 .
    docker images | grep sails-workshop

---

**OPTIONAL**
- [enable kubectl shell autocompletion on MacOS](https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion)
- [install PyCharm Kubernetes plugin](https://www.jetbrains.com/help/pycharm/kubernetes.html)
- [install vim Kubernetes yaml plugin](https://octetz.com/docs/2020/2020-01-06-vim-k8s-yaml-support/)

---

## Documentation
- [what is Kubernetes ?](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
- [kubectl command line tool](https://kubernetes.io/docs/reference/kubectl/overview/)
- [kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl command reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [kubernetes concepts](https://kubernetes.io/docs/concepts/)

