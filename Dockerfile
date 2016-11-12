# Define the NodeJS we're using
# In this case, we're using the
# recommended LTS version 6.9.1
FROM node:6.9.1
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install dependencies using Yarn
COPY package.json /usr/src/app/
RUN npm install -g yarn
RUN yarn
# Bundle app source
COPY . /usr/src/app/
# 3030 is the default Feathers port
EXPOSE 3030
# Define the runtime command
CMD ["npm", "start"]

