FROM mhart/alpine-node:8.9.4

WORKDIR /blog.front

COPY package.json /blog.front/package.json
RUN npm config set registry http://registry.npm.taobao.org && \
  npm config set package-lock false && npm install

COPY . /blog.front


RUN npm run build


ENV DOCKER=true
EXPOSE 20162

CMD [ "sh", "docker-entrypoint.sh" ]