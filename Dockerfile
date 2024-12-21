#base image 
FROM node:20-alpine


#setting up working directive
WORKDIR /app

COPY . .


RUN npm install


EXPOSE 5173

ENTRYPOINT [ "sleep" ]

LABEL Author="Subhash"

#CMD [ "10" ]

CMD ["npm", "run", "dev"]
