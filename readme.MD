## Docker with express js

### Steps
  1. Create a express server
  ```js
  const express  = require("express")
const app = express()
const path = require('path')

app.use('/files',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
res.sendFile(path.resolve('index.htm'))
})

app.get('*',(req,res)=>{
    res.redirect('/files/error.htm')
})


app.listen(5500,()=>console.log('server is listening on port 5000'))
  ```

  2. create Dockerfile and .dockerignore
   - dockerignore
  ```docker
  node_modules
.env
.git
.DS_Store
dist
.coverage
  ```
  - configure Dockerfile
  ```docker
  FROM node:16
WORKDIR /app
COPY ./package*.json ./
RUN  npm install
COPY . . 
EXPOSE 5500
CMD ["npm","run","dev"]
  ```

  3. run command to build a docker image
  ```shell
   docker build -t docker-express-image .
  ```

  4. run your docker image (it will start container from your image)
   ```shell
   docker run --rm -d -p 5500:5000 --name express-docker-container docker-express-image
   ```
 After container is running you will get an hash id  
   ```shell
      3aee9a54b3d1cc52b944bf9cef41076fc60af2c5d3e62228cf574da16b07dfa8
   ```