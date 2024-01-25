const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./DB/index");
const bodyParser = require("body-parser");
const zod = require("zod");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//creating todo
app.post("/todo", async (req, res) => {
  //zod
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "wrong input" });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ msg: "Successfully Data Stored" });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

//update
app.put("/completed", async (req, res) => {
  //zod
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "wrong input" });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
    //updateOne function need two arugument 1.what is you want to update  2. what do you want to update
  );
  res.json({ msg: "Successfully mark as completed" });
});

app.listen(3000);
