'use strict'
const Hapi = require('hapi'),
      routes = require('./routes'),
      Inert = require('inert'),
      Path = require('path');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'html')
            }
        }
    }
});

server.connection({port: 3000});

server.register(Inert, () => {});

server.on('response', function (request) {
    console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
});

routes.forEach((route) => {
    server.route(route);
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
