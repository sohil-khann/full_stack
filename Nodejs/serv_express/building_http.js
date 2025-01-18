const http = require('http');
const fs = require('fs');
const url=require(`url`);


const myServer = http.createServer((req, res) => {
    const currentDate = new Date();
    const log = `${currentDate.toISOString()}: ${req.url} New Req received\n`;
    const myUrl=url.parse(req.url,parseQueryString= true);
    fs.appendFile('log.txt', log, () => {
        switch (req.url) {
            case "/": res.end(`home page is here `);
                ;
                break;
            case "/about":
                res.end('Hello I am Sohil Khan');
                break;
            default:
                res.end('Nothing is there');
        }
    });
    
// console.log(myUrl);
res.end("Hi "+myUrl.query.myname);
});
myServer.listen(8000, () => console.log('Server started'));