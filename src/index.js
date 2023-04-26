const express = require("express");
const dataSource = require("./utils").dataSource;
const cors = require("cors");
//Import the controllers 
const wilderController = require("./controller/wilder")
const skillController = require("./controller/skill")
const gradeController = require("./controller/grade")

const app = express();
//Autorisation express to send JSON files
app.use(express.json());
app.use(cors({ origin: "https://localhost:3000" }))

app.get("/", (req, res) => {
   res.send("Hello World");
});

//routes-Wilder
app.post("/api/wilder", wilderController.create)
app.get("/api/wilder", wilderController.read)
app.delete("/api/wilder", wilderController.delete)
app.put("/api/wilder", wilderController.update)
//routes-Skill
app.post("/api/skill", skillController.create)
app.get("/api/skill", skillController.read)
app.delete("/api/skill", skillController.delete)
app.put("/api/skill", skillController.update)
//routes-Grade
app.post("/api/grade", gradeController.create)
app.get("/api/grade", gradeController.read)
//404
app.use(function (req, res, next) {
   res.status(404).send('Sorry cant find that!');
});

//Start Server
const PORT = 5001;

const start = async () => {
   await dataSource.initialize();
   app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}
start();