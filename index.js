const http = require('http');
const port= 4444;
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    

    //router
    switch(true){
        case req.url === '/' && req.method === 'GET':
            fs.readFile('./views/index.html', (err,file) => {
                res.setHeader('Content-type', 'text/html');
                res.end(file);
            });
            break;
            case req.url === '/minta.css' && req.method === 'GET':
            fs.readFile('./views/minta2.css', (err,file) => {
                res.setHeader('Content-type', 'text/css');
                res.end(file);
            });
            break;
            case req.url === '/telefon' && req.method === 'GET':
                kiszolgal('./views/telefon.json', 'application/json', req, res);
                break;
                default:
            kiszolgal('./views/hiba404.html', 'text/html', req, res);
            //majd ezt is kuldom allomanybol

            //res.end('ezt válaszoltam');
    }
})

function kiszolgal(filename, type, req, res){
    fs.readFile(filename, (err,file) => {
        res.setHeader('Content-type', 'text/html');
        res.end(file);
    });
}
console.log('megy')
server.listen(port);