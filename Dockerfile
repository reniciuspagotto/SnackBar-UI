FROM node:9.1

ADD package.json /tmp/package.json
ADD default.conf /tmp/default.conf

RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src && cp /tmp/default.conf /src/default.conf
RUN npm install -g @angular/cli

WORKDIR /src
COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=0 src/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 src/dist /usr/share/nginx/html

CMD nginx -g 'daemon off;'

EXPOSE 80