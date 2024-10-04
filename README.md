# Job Manager Application

This repository includes a **Job Manager** app composed of a **Java-based gRPC backend**, a **Vue.js frontend**, and an **Envoy Proxy** setup to facilitate communication between the two services.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Layout](#project-layout)
- [Backend Setup](#backend-setup)
  - [1. Navigate to Backend Directory](#1-navigate-to-backend-directory)
  - [2. Build the Backend](#2-build-the-backend)
  - [3. Start the Backend](#3-start-the-backend)
- [Frontend Setup](#frontend-setup)
  - [1. Navigate to Frontend Directory](#1-navigate-to-frontend-directory)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure the Frontend](#3-configure-the-frontend)
  - [4. Run the Frontend](#4-run-the-frontend)
- [Envoy Proxy Setup](#envoy-proxy-setup)
  - [1. Install Envoy](#1-install-envoy)
  - [2. Verify Envoy Installation](#2-verify-envoy-installation)
  - [3. Configure Envoy](#3-configure-envoy)
  - [4. Run Envoy](#4-run-envoy)

---

## Prerequisites

Make sure you have the following installed before starting:

- **Java Development Kit (JDK) 8 or higher**
- **Maven** (for building the backend)
- **Node.js and npm** (for running the frontend)
- **Envoy Proxy** (installation instructions provided below)
- **Git** (optional, for cloning the repository)

---

## Project Layout

The project should have the following structure:

```
├── grpc-backend/     # Java gRPC backend service
├── grpc-frontend/    # Vue.js frontend application
└── grpc-frontend/src/envoy/envoy.yaml     # Envoy proxy configuration
```

---

## Backend Setup

### 1. Navigate to Backend Directory

In your terminal, move to the `grpc-backend` directory:

```bash
cd grpc-backend
```

### 2. Build the Backend

Ensure Maven is installed, then build the backend:

```bash
mvn clean install
```

This compiles the code and packages it into an executable JAR file.

### 3. Start the Backend

Run the gRPC backend service with the following command:

```bash
mvn exec:java -Dexec.mainClass="com.jobmanagement.JobServer"
```

---

## Frontend Setup

### 1. Navigate to Frontend Directory

Open a new terminal window or tab, and go to the `grpc-frontend` directory:

```bash
cd grpc-frontend
```

### 2. Install Dependencies

Ensure that Node.js and npm are installed, then run:

```bash
npm install
```

### 3. Configure the Frontend

By default, the Vue.js development server runs on **port 8080**. To avoid conflicts with the backend, we will run it on **port 8081**.

1. **Create a `vue.config.js` file** in the `grpc-frontend` directory if it doesn’t already exist:

   ```bash
   touch vue.config.js
   ```

2. **Add the following content** to `vue.config.js`:

   ```javascript
   const { defineConfig } = require('@vue/cli-service')
   module.exports = defineConfig({
   transpileDependencies: true,
   chainWebpack: config => {
     config.module
       .rule('typescript')
       .test(/\.ts$/)
       .use('ts-loader')
       .loader('ts-loader')
       .end();
   }
   });

   module.exports = defineConfig({
     transpileDependencies: true,
     chainWebpack: config => {
       config.module
         .rule('babel')
         .test(/\.(js|ts)$/)
         .use('babel-loader')
         .loader('babel-loader')
         .end();
     }
   });
   ```

3. **Update the API Base URL in the Frontend** to point to **Envoy** (running on port **8080**):

   - If you have an environment configuration file (e.g., `.env.development`), set the API base URL:

     ```
     VUE_APP_API_BASE_URL=http://localhost:8080/
     ```

   - Alternatively, update the API calls in your code to point to `http://localhost:8080/`.

### 4. Run the Frontend

Start the frontend development server:

```bash
npm run serve
```

Your Vue.js app will now be accessible at **http://localhost:8081**.

---

## Envoy Proxy Setup

### 1. Install Envoy

#### macOS

Install Envoy via Homebrew:

```bash
brew install envoy
```

#### Windows and Linux

Refer to the [official Envoy installation guide](https://www.envoyproxy.io/docs/envoy/latest/start/install) for installation instructions specific to your operating system.

### 2. Verify Envoy Installation

To check if Envoy is correctly installed, run:

```bash
envoy --version
```

You should see output similar to:

```
envoy 1.x.x (commit xxxxxxx, built YYYY-MM-DD)
```

### 3. Configure Envoy

Ensure your `envoy.yaml` file is properly set up as follows:

```yaml
static_resources:
   listeners:
      - name: listener_0
        address:
           socket_address:
              address: 0.0.0.0
              port_value: 8080  # Port where Envoy listens for incoming gRPC-Web requests
        filter_chains:
           - filters:
                - name: envoy.filters.network.http_connection_manager
                  typed_config:
                     "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                     stat_prefix: ingress_http
                     codec_type: AUTO
                     route_config:
                        name: local_route
                        virtual_hosts:
                           - name: backend
                             domains: ["*"]
                             routes:
                                - match:
                                     prefix: "/"
                                  route:
                                     cluster: grpc-backend
                                     cors:
                                        allow_origin_string_match:
                                           - exact: "http://localhost:8082"  # Matches frontend
                                        allow_methods: "GET, POST, OPTIONS"
                                        allow_headers: "content-type, x-grpc-web, authorization, x-user-agent"
                                        expose_headers: "grpc-status, grpc-message"
                                        max_age: "86400"
                                        allow_credentials: true
                     http_filters:
                        - name: envoy.filters.http.cors
                          typed_config:
                             "@type": type.googleapis.com/envoy.extensions.filters.http.cors.v3.Cors
                        - name: envoy.filters.http.grpc_web
                          typed_config:
                             "@type": type.googleapis.com/envoy.extensions.filters.http.grpc_web.v3.GrpcWeb
                        - name: envoy.filters.http.router
                          typed_config:
                             "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
   clusters:
      - name: grpc-backend
        connect_timeout: 0.5s
        type: LOGICAL_DNS
        lb_policy: ROUND_ROBIN
        load_assignment:
           cluster_name: grpc-backend
           endpoints:
              - lb_endpoints:
                   - endpoint:
                        address:
                           socket_address:
                              address: localhost  # Address of Java backend
                              port_value: 50051    # Port where Java backend is listening
        http2_protocol_options: {}  # Enable HTTP/2 for the backend without TLS
```

**Important details:**

- Envoy will listen on **port 8080**.
- Frontend should connect from **http://localhost:8081**.
- Backend is accessible via **localhost:50051**.

### 4. Run Envoy

From the root of your project (where `envoy.yaml` is located), run Envoy:

```bash
envoy -c envoy.yaml
```

Envoy will now forward requests from the frontend to the backend.