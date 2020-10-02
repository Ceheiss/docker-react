# we tag it as our builder phase
FROM node:alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
# we are not changing our code anymore, so we can make a direct copy
COPY . .
RUN npm run build
# /app/build <-- that is the directory we care about

FROM nginx
EXPOSE 80
# I want to copy something from another phase
COPY --from=0 /app/build /usr/share/nginx/html
# Nginx is going to start automatically

