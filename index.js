const http = require('http')
const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer (function (req, res) {
    if (req.url=='/hello'){
        res.writeHeader(200, {'Content-Type': 'text/plain'})
        if(req.method=='GET')
            res.write('world')
        if(req.method=='POST')
            res.write('world created')
        if(req.method=='PUT')
            res.write('world updated')
        if(req.method=='DELETE')
            res.write('world deleted')
        res.end()
    }
})
server.listen(port,host, function(err){
    if(!err) console.log('Server is running...');
    else console.log(err);
});