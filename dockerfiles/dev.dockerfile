FROM oven/bun:1 AS website
WORKDIR /app

COPY package.json ./

RUN bun install
COPY . ./
RUN bun run build:dev

#######

FROM nginx:alpine AS nginxrunner
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=website /app/build /usr/share/nginx/html

#Must match the ./nginx.conf 'listen'
EXPOSE 443

#Start up nginx
CMD ["nginx", "-g", "daemon off;"]