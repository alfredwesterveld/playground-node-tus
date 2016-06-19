# playground-node-tus

Resumable file upload playground via tus.io(http://tus.io/)
tus server: https://github.com/tus/tus-node-server
tus client: https://github.com/tus/tus-js-client
static fileserver: http://expressjs.com/

## requirements

- nodejs installed. If not please go to https://nodejs.org/en/download/
- Knowledge http (protocol), basic terminal
- Port 8080 and 1080 should be available (at least for now).

## install

```bash
$ npm install
```

## run

```bash
$ node index.js
```

## upload (with file resume)

visit http://localhost:8080
After upload will put your file into /files folder
