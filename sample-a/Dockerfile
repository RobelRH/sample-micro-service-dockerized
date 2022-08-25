FROM node:14

WORKDIR /app/sample-a

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# VOLUME [ "/app/sample-a/node_modules" ]

CMD ["npm", "run", "dev"]