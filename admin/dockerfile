FROM mhart/alpine-node:8.9.4

WORKDIR /blog.admin

COPY package.json /blog.admin/package.json

RUN npm config set registry http://registry.npm.taobao.org && \
  npm config set package-lock false && npm install

COPY . /blog.admin

RUN npm run build

ENV DOCKER=true
EXPOSE 20161

CMD [ "npm", "start" ]