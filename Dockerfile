FROM node:18-alpine
WORKDIR /flavor-generator
COPY . .
RUN npm install -g npm@10.2.0
RUN yarn install --production
RUN npm run build
RUN npm install --global serve
CMD ["serve", "-s", "build"]
EXPOSE 3000