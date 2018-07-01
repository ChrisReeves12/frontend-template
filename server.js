const httpServer = require('http-server');
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();
const port = 3000;

// Setup live reload
if (process.env.NODE_ENV !== 'production')
    liveReloadServer.watch('./public');

// Setup server
httpServer
    .createServer({root: './public'})
    .listen(port, () => { console.log(`Listening on port ${port}...`) });