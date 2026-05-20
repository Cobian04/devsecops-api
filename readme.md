# DevSecOps API

Proyecto integrador de DevSecOps utilizando Node.js, Docker y GitHub Actions.

## Tecnologías

- Node.js
- Express
- Docker
- GitHub Actions
- npm audit
- Trivy

## Ejecutar localmente

npm install

node index.js

## Ejecutar con Docker

docker build -t devsecops-api .

docker run -p 3000:3000 devsecops-api

## Pipeline DevSecOps

El pipeline ejecuta:

- npm audit
- detección de passwords hardcodeados
- escaneo Docker con Trivy

## Vulnerabilidad demostrada

Se simuló una contraseña hardcodeada para demostrar el fallo automático del pipeline.