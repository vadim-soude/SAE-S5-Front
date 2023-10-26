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

COPY --from=build /SAE/dist /usr/share/nginx/html
