var socket = require('socket.io');

let io;

exports.socketConnection = (server) => {
    io = socket(server);
    io.on('connection', (socket) => {
        console.info(`Client connected [id=${socket.id}]`);

        socket.on('disconnect', () => {
            console.info(`Client disconnected [id=${socket.id}]`);
        });

        socket.on('coordinates', (lat, long) => {
            
          });
    });
};

exports.requestCoordinates = () => io.emit('get coordinates');