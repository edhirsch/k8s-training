# Kubernetes Helm
## Prerequisites
### Install Helm
[any OS](https://helm.sh/docs/intro/install/)

# Nginx Ingress Controller
[nginx-ingress chart](https://github.com/helm/charts/tree/master/stable/nginx-ingress)
### Enable the stable repository
    helm repo add stable https://kubernetes-charts.storage.googleapis.com
### Install nginx-ingress controller
    helm install nginx-ingress stable/nginx-ingress -f nginx-ingress/values.yaml
### Uninstall nginx-ingress controller
    helm del nginx-ingress
