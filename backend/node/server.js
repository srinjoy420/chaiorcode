const express= require("express");
const app= express();

app.delete("/users/:id", (req, res) => {
    res.send(""); 
});