# Sitio Web Institucional Modular

Este proyecto es un sitio web institucional diseñado para ser altamente modular, permitiendo la integración de librerías personalizadas que amplían su funcionalidad. El objetivo es satisfacer las necesidades de distintos clientes combinando sitios web estáticos con aplicaciones web dinámicas.

## Características Principales

- **Modularidad**: Facilita la integración de librerías personalizadas.
- **Escalabilidad**: Diseñado para crecer con las necesidades del cliente.
- **Flexibilidad**: Combina sitios web estáticos con aplicaciones web dinámicas.

## Librerías Implementadas

### BingImage Connector
Permite la conexión con Bing Image API para la gestión de imágenes.

### Pasarela de Pagos
[Proyecto] Implementa una pasarela de pagos para transacciones seguras.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   ```bash
    cp .env.example .env   
   ```
4. Inicia el servidor de desarrollo:
   ```bash
    npm run dev
   ```
## Dockerizacion
Para ejecutar el proyecto en un contenedor Docker:

1. Construye la imagen:
   ```bash
   docker-compose build
   ```
2. Inicia el contenedor:
   ```bash
   docker-compose up
   ```

## Contribución

Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').
4. Haz push a la rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

