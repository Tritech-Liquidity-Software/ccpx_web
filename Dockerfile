FROM node:18 AS ccpex
WORKDIR /app
COPY . ./
RUN yarn
#ARG URI
#ENV REACT_APP_API_URL=$URI
RUN yarn build
RUN npm install
RUN yarn build

EXPOSE 5044

CMD ["yarn", "start"]
