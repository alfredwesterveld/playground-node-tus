const path = require('path')
    , express = require('express')
    , tus = require('tus-node-server')
    , server = new tus.Server()
    , tusd = express()
    , fileserver = express()

server.datastore = new tus.FileStore({
    path: '/files'
})

tusd.all('/files/*', function(req, res) {
    server.handle(req, res);
})

fileserver.use(express.static('public'))
fileserver.listen(8080)
tusd.listen(1080);
