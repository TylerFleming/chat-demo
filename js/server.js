const { Server } = require("socket.io");

const io = new Server(3000, { 
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
      }
});

io.on("connection", (socket) => {
  socket.on('send-message', message => {
      socket.broadcast.emit('show-message', message)
  })
});