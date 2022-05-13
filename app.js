const path = require( "path" );
const express = require ( "express" );
const { rmdirSync } = require("fs");
const app = express();
const port = 3030;

app.listen(port, () => { 
    console.log("El servidor está corriendo en el puerto " + port)
})
//
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
})
//
app.get("/turing", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/turing.html"))
})
//
app.get("/babbage", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/babbage.html"))
})
//
app.get("/berners-lee", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/berners-lee.html"))
})
//
app.get("/clarke", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/clarke.html"))
})
//
app.get("/hamilton", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/hamilton.html"))
})
//
app.get("/hopper", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/hopper.html"))
})
//
app.get("/lovelace", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/lovelace.html"))
})
//
app.use(express.static("public"))










