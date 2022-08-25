FROM node:14

WORKDIR /app/sample-b

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

# VOLUME [ "/app/sample-b/node_modules" ]

CMD ["npm", "run", "dev"]