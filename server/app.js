const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const { emit } = require("process");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

let lastColor = "#282c34";

io.on("connection", (socket) => {
  console.log("One user have been connected.");

  socket.emit("receive", lastColor);

  socket.on("newColor", (color) => {
    console.log(color);

    lastColor = color;
    io.emit("receive", color);

    /* broadcast.emit("receive", color); */
    //broadcast.emit ile sadece bağlı olan clientlara gönderir.
  });

  socket.on("disconnect", () => {
    console.log("One user disconnected.");
  });
});

http.listen(3001, () => console.log("Server is up 🚀 🚀 🚀"));
