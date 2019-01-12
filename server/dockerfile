FROM mhart/alpine-node:8.9.4

WORKDIR /blog.server

COPY package.json /blog.server/package.json
RUN npm config set registry http://registry.npm.taobao.org && \
  npm config set package-lock false && npm install

COPY . /blog.server

RUN npm run compile

ENV DOCKER=true
EXPOSE 20160

CMD ["node", "/blog.server/production.js"]