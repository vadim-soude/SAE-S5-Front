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
