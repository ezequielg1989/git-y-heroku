const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("register", (req,res)=>{
  res.sendFile(path.join(__dirname,"/register.html "))
} );

app.get("login", (req,res)=>{
  res.sendFile(path.join(__dirname,"/login.html"))
} );
const puerto= process.env.PORT || 3001

app.listen(puerto, () => {
  console.log("Server is running on PORT :"+puerto);
});