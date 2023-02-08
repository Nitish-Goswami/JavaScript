const http = require('http');

// Handle Request for server
function requestHandler(req,res){
    console.log(req.url);
}

// Creating Http Server
const server = http.createServer(requestHandler);

// Listen to server at given port
server.listen(4000, (err)=>{
    if(err) console.log(err)
    console.log('Server is running fine.')
})