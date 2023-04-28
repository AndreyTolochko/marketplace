1. Set up mongo running container on docker:

$docker run --name <container_name> --restart=always -d -p 27017:27017 mongo mongod --auth

-v meaning volume at host filesystem to docker filesystem example (docker run -p 27017:27017 -v /home/<user>/data:/data/db)
-p port binding 27017:27017
mongod --auth - secure db with access control 

2. go to mongo container using docker shell

$docker exec -it <container_name> bash

then enter to mongo
root@blablabla:/# mongosh

enter to database (here it admin)
test>use admin

create user and password with roles
admin>db.createUser({user: "smartkeeper",pwd: passwordPrompt(),roles: [{ role: "userAdminAnyDatabase", db: "admin" },{role:"readWriteAnyDatabase", db: "admin"}]})
prompt with password have to appear. Enter your desired password


exit from instance, it will shut down also docker container
admin>db.adminCommand( { shutdown: 1 } );

start container
$docker container start <container_name>

execute command at mongo container
$docker exec -it bash

enter following to activate authentication
mongonsh -u "user" -p "StrongPassword" YOURHOSTIP --authenticationDatabase "admin" or <name_yourdb>

to use inside app need to install mongoose
$npm install mongoose

after installation connect to db using mongoose, example:
    mongoose.connect(process.env.MONGO_URI,
        {
            dbName:process.env.MONGO_DB, 
            user:process.env.MONGO_USER,
            pass:process.env.MONGO_PASS
        }).then(()=>{
            app.listen(process.env.PORT, () => {
                console.log(`app running on ${process.env.PORT}`);
            });
        }).catch(error=>{
            console.log(error);
        });

example mongo_uri
MONGO_URI=mongodb://localhost:27017