# Test Meli - Omar Lopez

## Estructura.

El proyecto tiene dos carpetas que representan las dos aplicaciones basicas del proyecto, client, la aplicacion web, y server, el servidor de la aplicacion.

## Inicializacion del proyecto

Para inicializar el proyecto, se debe correr el comando `npm install` tanto en el root del proyecto, como en la carpeta client (App Web).

Luego para iniciar los servicios se puede correr de manera independiente los comandos:

    npm run start-client

    npm run start-server

O ejecutar el comando:

    npm run start

Este ultimo comando utiliza concurrently para ejecutar los dos primeros comandos al mismo tiempo.

Adicionalmente, la carpeta client, admite los siguientes comandos: 

    npm run test 

y 

    npm run test -- --coverage

## Responsividad

Vista de lista de productos.

![Responsividad Lista](https://github.com/omar1893/test-meli/assets/25007356/4e9d2616-726f-4dad-bad6-bac6deb4d96d)


Vista de detalle de producto.

![Responsividad Vista detalle](https://github.com/omar1893/test-meli/assets/25007356/5191ece5-b07c-410e-ab42-2202713d9433)


## Lighthouse

Lighthouse vista home
![Lighthouse vista home](https://github.com/omar1893/test-meli/assets/25007356/0bccf2e7-4bb2-4303-8cf2-e2486fa4399c)

Lighthouse vista lista de productos
![Lighthouse vista lista](https://github.com/omar1893/test-meli/assets/25007356/4a014abd-7b1d-4020-91c5-73adca952c7c)

Lighthouse vista detalle de producto
![Lighthouse vista detalle](https://github.com/omar1893/test-meli/assets/25007356/d62a27da-4e93-4d0f-bd98-fba1db0e0487)


## Coverage

El coverage de los tests actuales esta ubicado por encima del 90%.

![coverage](https://github.com/omar1893/test-meli/assets/25007356/96d84ecf-fc49-49af-8b37-c7026be76cda)
