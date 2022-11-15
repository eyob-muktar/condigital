FROM node:16.15.0

# prepare the working dir
WORKDIR /app

# copy package.json and install packages
COPY package.json /app/package.json
RUN npm i

# offload source code
COPY . .

# install packages
RUN npm run build

# entrypoint for app
CMD ["npm", "run", "start:debug"]

