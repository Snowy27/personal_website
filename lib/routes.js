'use strict'

const os = require('os'),
    hostname = os.hostname();

module.exports = [
    { method: 'GET', path: '/{param*}', handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }},
    { method: 'GET', path: '/home', handler: (req, rep) => { rep('<html><body>Welcome to the homepage on the helper composer!</body></html>');}}
];
