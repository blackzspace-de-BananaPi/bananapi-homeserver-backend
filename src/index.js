const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const utils = require('rjutils-collection');
const https = require('https');
const http = require('http');
const fs = require('fs');
const requestIP = require('request-ip');
const app = express();




app.use(cors());
app.use(express.json());




app.post('/api', (req, res) => {
    console.log("COMMING");
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python3',["/usr/share/services/test.py"]);
   
  });






function startUp() {
    console.log("Console > Starting BACKEND-Server!!...");
    console.log(`

    ░░██████═╗░██╗░░░░░░░░░░███═╗░░░░░░██████╗░██╗░░██╗░██████╗░███████╗░██████═╗░░░░███═╗░░░░░░██████╗░██████╗░░░░░██████═╗░██████╗░░
    ░░██║░░██╝░██║░░░░░░░░░██╗██╚╗░░░░██═════╝░██║ ██═╝░░░░░██║░██═════╝░██║░░██║░░░██╗██╚╗░░░░██═════╝░██════╝░░░░░██║░░██║░██════╝░░
    ░░██████╚╗░██║░░░░░░░░███████╚╗░░██╚╗░░░░░░█████╚╗░░░░██╔═╝░███████╗░██████╔╝░░███████╚╗░░██╚╗░░░░░░██████╗░░░░░██║░░██║░██████╗░░
    ░░██║░░██║░██║░░░░░░░██╔════██╚╗░░██║░░░░░░██╔═██╚╗░██╔═╝░░░░░░░░██║░██╔═══╝░░██╔════██╚╗░░██║░░░░░░██════╝░░░░░██║░░██║░██════╝░░
    ░░██████╔╝░███████╗░██╔╝░░░░░██║░░░██████╗░██║░░██║░██████╗░███████║░██║░░░░░██╔╝░░░░░██║░░░██████╗░██████╗░██╗░██████╔╝░██████╗░░
    ░░╚═════╝░░╚══════╝░╚═╝░░░░░░╚═╝░░░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚══════╝░╚═╝░░░░░╚═╝░░░░░░╚═╝░░░╚═════╝░╚═════╝░╚═╝░╚═════╝░░╚═════╝░░
    `);


}




startUp();
    
const httpServer = http.createServer(app);
// const httpsServer = https.createServer({
//   key: fs.readFileSync('./keys/blackzspace.de-0001/privkey.pem'),
//   cert: fs.readFileSync('./keys/blackzspace.de-0001/fullchain.pem'),

  
// }, app);


httpServer.listen(7780, () => {
    
  console.log("Console > HTTP Running on PORT:  8080")
});



// httpsServer.listen(7790, () => {
//   console.log("Console > HTTPS Running on PORT:  8081")
// });
