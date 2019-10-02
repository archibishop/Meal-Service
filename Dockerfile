# from base image node
FROM node:8.11-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN npm install

# install sequelize
RUN npm install -g sequelize

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE 3071

# command to run when intantiate an image
# CMD ["npm","run","start"]

# Use script to run project instead of command.
RUN cp docker-meal-entrypoint.sh /usr/local/bin/ && chmod +x /usr/local/bin/docker-meal-entrypoint.sh
ENTRYPOINT [ "/usr/local/bin/docker-meal-entrypoint.sh" ]
