# Kubernetes Helm
## Prerequisites
### Install Helm
[any OS](https://helm.sh/docs/intro/install/)

# Nginx Ingress Controller
[ingress-nginx chart](https://github.com/kubernetes/ingress-nginx/tree/master/charts/ingress-nginx)
### Adding the ingress-nginx repository
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
### Install nginx-ingress controller
    helm install ingress-nginx ingress-nginx/ingress-nginx -f ingress-nginx/values.yaml
### Uninstall nginx-ingress controller
    helm del ingress-nginx
