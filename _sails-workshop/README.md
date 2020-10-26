# Steps to setup the environment (Dockerized)
1. Clone the Git repository
`git clone https://bitbucket-eng-sjc1.cisco.com/bitbucket/scm/cite/sails_workshop.git`

2. Go in newly cloned directory
`cd sails_workshop`

3. You need to change the username(`MONGO_USERNAME`) and password(`MONGO_PASSWORD`) in
the `.env`, credentials which will be used in the mongo database. And your newly defined
`.env` file should not be pushed to bitbucket. 

4. We'll use docker-compose command to raise up the entire environment which will include
the frontend, backend and mongo, all of them in separate containers.
`docker-compose up -d`

**NOTE**: 
- `-d` is for detached mode - which means the containers will be raised but the logs
will not be displayed while they are getting raised.
- it can be used without `-d` and you'll see all the logs from all three containers
mixed together

You're application should be now accessible at `http://localhost:8000` and since the local code
is now synced in the following manner, local frontend in the frontend container and local backend
in the backend container, there is no need to run anything remotely anymore. All local changes will
be seen directly on the containers because of the use of the docker volumes. 

To bring down the environment use `docker-compose down`, while being in the `sails_workshop` folder,
which will stop and delete the existing containers.

To see the logs of each containers, you can attach yourself to the container with the following
command `docker-compose logs --follow <name_of_the_container>`

Displaying all the containers raised with `docker-compose up` can be done with the following
`docker-compose ps`

# Steps to setup the environment (Local Computer)

1. Clone the Git repository
`git clone https://bitbucket-eng-sjc1.cisco.com/bitbucket/scm/cite/sails_workshop.git`

2. Go in newly cloned directory
`cd sails_workshop`

3. Optional: If you don't have node version 8.15 you can install NVM in order to have multiple virtual environments: Here's a cool tutorial under 'Best way to install NVM' https://medium.com/@isaacjoe/best-way-to-install-and-use-nvm-on-mac-e3a3f6bc494d

Afterwards you must do an `nvm install 8.15.1` - `nvm use 8.15.1`

4. Install MongoDB locally; follow the official documentation: https://docs.mongodb.com/manual/installation/

5. Go to your backend folder
`cd backend`

6. Create a `data` folder in it and a `db` folder in that data folder.

7. Open your mongo instance: `sudo mongod --dbpath="/{PATH_TO_YOUR_REPO}/sails-workshop/sails_workshop/backend/data/db"`

8. Open a new terminal and go to the `backend` folder of your repo
`cd backend`

9. Run `npm install`

10. Run the backend server: `sails console`

11. Open a new terminal and go to the `frontend` folder of your repo
`cd frontend`

12. Run `npm install` and afterwards `bower install`

13. Run your frontend server: `gulp`

