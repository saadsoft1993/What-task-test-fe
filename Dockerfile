FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY public/ public/
COPY src/ src/
COPY tsconfig.json ./
RUN yarn
RUN yarn run build
FROM nginx:1.23.2-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]