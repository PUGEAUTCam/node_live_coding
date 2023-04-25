const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder")

const app = express();
//Autorisation express pour envoyer du JSON
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Hello World");
});

app.post("/api/wilder", wilderController.create)
app.get("/api/wilder", wilderController.read)
app.delete("/api/wilder", wilderController.delete)
app.put("/api/wilder", wilderController.update)
app.use(function (req, res, next) {
   res.status(404).send('Sorry cant find that!');
});


//Start Server
const start = async () => {
   await dataSource.initialize();
   app.listen(3000, () => console.log("Server started on 3000"));
}
start();