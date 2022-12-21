import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting to server...");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("Connected to server.");
  });
};

//emit client'ta ise backende gönderir, backende ise clienta gönderir.
//on ise clienta gönderilenleri alır, backende ise clienta gönderilenleri alır.
export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    cb(color);
  });
};
