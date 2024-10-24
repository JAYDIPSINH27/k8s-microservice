# Kubernetes Microservices with CI/CD Pipeline on GKE

You can view the live demo of the project by following this link:  
[Project Demo](https://drive.google.com/file/d/1FFaDXHpyypMHhkld5eqcNWsu-Y0wjDzO/view?usp=sharing)

## Project Overview
This project demonstrates the deployment of two microservices on **Google Kubernetes Engine (GKE)**, orchestrated using **Kubernetes** and **Docker**. It includes a complete **CI/CD pipeline** for automated builds and deployments using **Google Cloud Build**. The services interact via RESTful APIs, and both utilize a shared **Persistent Volume** for file storage and retrieval.

### Microservices Architecture
- **Service 1**: Responsible for storing product data in a file and retrieving product details from a persistent volume.
- **Service 2**: Handles the calculation of product totals based on the stored file from Service 1 and communicates the result.

## Project Structure
```bash
K8S/
├── Service1/
│   ├── node_modules/
│   ├── deployment.yml       # Kubernetes deployment configuration for Service 1
│   ├── Dockerfile           # Dockerfile to build Service 1 image
│   ├── index.js             # Service 1 logic (File storage & API handling)
│   ├── package-lock.json
│   ├── package.json         # Dependencies for Service 1
├── Service2/
│   ├── node_modules/
│   ├── deployment.yml       # Kubernetes deployment configuration for Service 2
│   ├── Dockerfile           # Dockerfile to build Service 2 image
│   ├── index.js             # Service 2 logic (Product calculation & API handling)
│   ├── package-lock.json
│   ├── package.json         # Dependencies for Service 2
├── main.tf                  # Terraform script to provision GKE cluster
└── pv.yml                   # Persistent volume configuration for shared data

## Technologies Used
- **Google Cloud Platform (GCP)**
  - Google Kubernetes Engine (GKE)
  - Google Cloud Build
  - Artifact Registry
  - Cloud Source Repository
- **Kubernetes** for container orchestration
- **Terraform** for infrastructure as code (IaC)
- **Docker** for containerization
- **Node.js & Express.js** for microservices

## Features
- **Microservices** architecture with RESTful APIs.
- **File storage and retrieval** on GKE persistent volume.
- **Product total calculation** using stored CSV files.
- **CI/CD Pipeline** for continuous integration and deployment using Google Cloud tools.
- **Automated Infrastructure** setup using Terraform for GKE cluster provisioning.

## Deployment Instructions

### Prerequisites
- Google Cloud account with sufficient credits.
- GCP services enabled: **Kubernetes Engine, Artifact Registry, Cloud Build**.
- Install **Terraform** for infrastructure provisioning.
