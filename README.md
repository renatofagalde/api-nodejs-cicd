# API Nodejs 

```shell
npm i -D nodemon typescript ts-node @types/express
```
```shell
npm i --save-dev @types/cors
```

```shell
npm i --save-dev @types/morgan
```

```shell
npm i express cors morgan
```

nodemon -> hotdeploy


## deploy in dockerhub
- docker running
- Login in your docker account
- generate image local
  - ```shell
    docker build -t renatofagalde/api-nodejs-cicd .
    ```
- generate image on docker hub
  - ```shell
    docker push renatofagalde/api-nodejs-cicd
    ```
- run container 1st
  - ```shell
    docker run --name api-container -p 3001:3000 -d renatofagalde/api-nodejs-cicd:latest
    ```
- start container
  - ```shell
    docker start api-container
    ```
- stop container
  - ```shell
    docker stop api-container
    ```
- view docker image
  - ```shell
    docker image ls
    ```
- view docker running containers
  - ```shell
    docker ps
    ```
- system prune
  - ```shell
    docker system prune -a -f
    ```

- create a EBS app in AWS    
