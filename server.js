const app=require("express")();
const server=require("http").createServer(app);
const io=require("socket.io")(server,{
  cors: {
    origin: ["http://localhost:5173","https://only-siblings.netlify.app"],//frontend
  }
});
app.get('/', (req, res) => {
  res.send('Server is Running')
})
io.on("connection", (socket) => {
    console.log("What is socket:",socket);
    console.log("Socket is Ready to show its magic");

    socket.on("chat",(payload)=>{
        console.log("What is Payload:",payload);
        io.emit("chat",payload)
    })
  });
  server.listen(5000,()=>{
    console.log("Server is Listening at port 5000...");
  })