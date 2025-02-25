# Personal Website

This repository contains the source code and configuration for a personal website deployed using a robust cloud infrastructure and containerization with Docker.

## Table of Contents

- [Infrastructure](#infrastructure)
- [Prerequisites](#prerequisites)
- [Setup and Deployment](#setup-and-deployment)
  - [Clone the Repository](#1-clone-the-repository)
  - [Configure Environment](#2-configure-environment)
  - [Build and Run Docker Container](#3-build-and-run-docker-container)
  - [Verify the Application](#4-verify-the-application)
- [Monitoring and Logging](#monitoring-and-logging)
- [License](#license)

## Infrastructure

The website leverages a multi-provider architecture to ensure high availability, security, and performance:

- **Hostinger**: Used for domain management and additional hosting integrations.
- **AWS Route 53**: Manages DNS, ensuring reliable domain resolution.
- **AWS CloudFront**: Acts as a Content Delivery Network (CDN) to serve static content globally with minimal latency.
- **AWS Certificate Manager**: Provides and manages SSL/TLS certificates to secure the site with HTTPS.
- **AWS S3**: Hosts static assets, offering a scalable and durable storage solution.
- **AWS CloudWatch**: Provides monitoring and logging for performance and troubleshooting.

## Prerequisites

Ensure you have the following installed on your development machine:

- [Docker](https://www.docker.com/)
- Git

## Setup and Deployment

Follow these steps to set up your local development environment and deploy the site:

### 1. Clone the Repository

Ensure that any required environment variables or configuration files (e.g., `.env`) are properly set up.

### 2. Build and Run Docker Container

The project is containerized using Docker. Choose one of the following approaches based on your needs:

#### a. Build and Start the Container

```bash
docker build -f Dockerfile -t personal-website-dev .
docker run --name personal-website-dev -p 3000:3000 -v "%cd%:/app" -e CHOKIDAR_USEPOLLING=true -e WATCHPACK_POLLING=true -v /app/node_modules personal-website-dev
```

#### b. Build, Export, and Start the Container

```bash
docker run --name personal-website-dev -p 3000:3000 -v "%cd%:/app" -v /app/node_modules personal-website-dev sh -c "npm run build && npm run export"
```

### 3. Verify the Application

After starting the Docker container, open your browser and navigate to:

```
http://localhost:3000
```

## Monitoring and Logging

- **Route 53 Query Logs**: Enabled via **CloudWatch Logs** for monitoring DNS requests.
- **CloudWatch Metrics**: Use AWS CloudWatch to track DNS query volume, performance, and error rates.
- **Log Retention Policies**: 30 days

## License

This project is licensed under the [MIT License](LICENSE).
