# Installation de l'environnement de dev du site Angular et mise en production

Ce projet a été généré avec l'outils [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Environement de dévelopement

Executé a la racine du projet `ng serve` pour démmarer un server de dévellopement.
Pour voir votre site allez sur `http://localhost:4200/`. \
Le serveur de dev est en hotreload, toute modification apporté au code devrait se mettre a jour sur le site en quelques secondes.

## Outils de génération

Executer la commande suivante a la racine de votre projet `ng generate component component-name` pour générer un composant complet, html, css, typescript et typescript de test. 

Vous pouvez aussi générer tout type de structure d'angular avec cette commande `ng generate directive|pipe|service|class|guard|interface|enum|module name`.

## Build

Executer la commande suivante a la racine de votre projet `ng build` pour generer les fichiers du site. 
L'artifacts sera stocké dans le dossier `dist/` du projet.\
Ce sont ces fichiers qui sont utilisé pour la mise en production et non faire fonctionné le site en mode dévelopement !

## Mise en production

Pour cela nous allons utilisé [docker](https://docs.docker.com)

Explication étape par étape :

- Créer un dossier, ce dossier sera le dossier parent.
- Créer un dossier angular dans ce dossier.
- Copier tout les fichier du projet dans ce dossier.\
\
\
\
\
- Dans le dossier angular, céer un fichier `nginx.conf` et y copier le code suivant :
```
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;
    autoindex_localtime on;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location /api {
            if ($request_method = "POST|GET") {
              add_header 'Access-Control-Allow-Origin' '*';
            }

            proxy_pass http://172.18.0.2/;
        }
}
```
- Dans le dossier angular, céer un fichier `Dockerfile` et y copier le code suivant :
```
FROM node:18-alpine AS build
RUN npm i -g @angular/cli

# Copie du package.json dans l'image
COPY ./package.json /SAE/package.json
WORKDIR /SAE/

# Installation des dépendances
RUN npm install

# Copie du dossier d'app
COPY . /SAE/
RUN ng build
EXPOSE 8081

FROM nginx:1.24.0-alpine AS prod

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
RUN mv /etc/nginx/conf.d/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /SAE/dist /usr/share/nginx/html
```
- Dans le dossier parent, créer un fichier `docker-compose.yml` et y copier le code suivant :

```
version: "2"
services:
  frontend:
    build: ./angular/
    ports:
        #Le premier chiffre indique le port d'accés au site. Utiliser un autre port si le port 80 est utilisé.
      - 80:80
```
- Executer dans le dossier parent : `docker-compose up -d --build`


### Vadim Soudé DEV1 BUT3
