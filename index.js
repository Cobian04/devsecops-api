const password = "admin123";
const express = require("express");

const app = express();

app.use(express.json());

let tasks = [];
const contraseña = "admin123";


app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({
    message: "Task added",
    data: req.body
  });
});

app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);

  res.json({
    message: "Task deleted"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});