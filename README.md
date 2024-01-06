# SAE-S5 FRONTEND ANGULAR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#How to deploy ?

- Create a dir named "angular"
- Clone all the git in this dir
- In the parent dir create a docker-compose.yml with the following content
version: "2"
```
services:
  frontend:
    build: ./angular/
    ports:
      - 8282:80
```
- run in the parent dir : `docker-compose up -d --build`
- Wait
- Enjoy the website on the 8282 port (you can change this in the docker-compose.yml file)
