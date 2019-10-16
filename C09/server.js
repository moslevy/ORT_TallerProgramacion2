// web server con los modulos nativos de nodejs
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=> {
    if(request.url == '/'){
        response.write('Hola mundo');
        response.end();
    }

    if(request.url == '/api/inventors'){
        response.write(fs.readFileSync('./inventors.json','utf-8'));
        response.end();
    }
});

server.listen(3000);
console.log('listen port 3000...');