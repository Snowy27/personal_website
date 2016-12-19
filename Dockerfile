FROM node
COPY package.json /src/
WORKDIR /src
RUN npm i
COPY . /src
EXPOSE 3000
CMD ["node", "."]
