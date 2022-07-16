const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {graphqlHTTP} = require('express-graphql');
const db=require('./database/db')
const {mailRouter}=require('./middleware/send-mail')
const socket = require("socket.io");
const http = require("http"); 
const uploadImages=require('./restful-api/upload-files')


const app = express();
app.use(express.json());
app.use(cors());

const graphQLSchema=require('./graphql/schema')
const graphQLResolver=require('./graphql/resolver')

//RestApi
app.use(mailRouter)
app.use(uploadImages);

app.use('/graphql', graphqlHTTP({
    schema:graphQLSchema,
    rootValue:graphQLResolver,
    graphiql:true,
}));


//Socket IO
const server = http.createServer(app);
const io = socket(server, { cors: { origin: " http://localhost:3000" } });
io.on("connection", (socket) => {
    console.log(`${socket.id} is connected`);

    socket.emit("connected", `${socket.id} is connected`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log("user joined Room:", data);
    });

    socket.on("message", (data) => {
        // emits an event to all the connected clients with the value of the received message
        socket.to(data[0]).emit("message", [data[1], data[2]]);
        // socket.broadcast.emit("message", data);
    });
});
//

const SERVER_PORT = process.env.SERVER_PORT || 4001 ;

db.sequelize.authenticate().then(()=>{
    app.listen(SERVER_PORT,()=>{
        console.log(`ServerApp is connected on port : ${SERVER_PORT}`);
    })
})
