#!/bin/bash
echo "Setup Kubernetes For Meal Service .... "
kubectl create -f database-service.yaml
kubectl create -f database-deployment.yaml
kubectl create -f redis-1-service.yaml
kubectl create -f redis-1-deployment.yaml
kubectl create -f web-1-service.yaml
kubectl create -f web-1-deployment.yaml
kubectl create -f web-1-claim0-persistentvolumeclaim.yaml
echo "Finished."
