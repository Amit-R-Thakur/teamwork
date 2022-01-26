const e = require("express");
const todo = require("../models/todos");
require("../database/connect");

exports.createtodo = async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(404).send("please do enter a todo");
  }
  try {
    const { _id } = req;
    const newtodo = new todo({ content, userId: _id });
    const todos = await newtodo.save();
    if (todos) {
      res.status(200).send({ todos });
    } else {
      res.status(404).send("todos was not created");
    }
  } catch (err) {
    res.status(404).send("todos was not created please try again!");
  }
};

exports.gettodobyid = async (req, res) => {
  try {
    const findtodo = await todo.findById(req.params.id);
    if (findtodo) {
      res.status(200).send(findtodo);
    } else {
      res.status(404).send("todo not found!");
    }
  } catch (err) {
    console.log(err);
    res.status(404).send("todo not found!");
  }
};
exports.getTodoByUserId = async (req, res) => {
  try {
    const { _id } = req;
    console.log(_id)
    const theTodo = await todo.find({userId: _id  });
    if (theTodo) {
      res.status(200).send(theTodo);
    } else {
      res.status(404).send("something went wrong!");
    }
  } catch (err) {
    res.status(404).send("todo not found!");
    console.log(err)
  }
};
exports.updateTodoStatus = async (req, res) => {
  try {
    const findtodo = await todo.findById(req.params.id);
    const { status } = findtodo;
    const updatingStatus = await todo.findByIdAndUpdate(
      req.params.id,
      { $set: { status: !status } },
      { new: true }
    );
    if (updatingStatus) {
      res.status(200).send(updatingStatus);
    } else {
      res.status(404).send("todo not updated");
    }
  } catch (err) {
    res.status(404).send("something went wrong!");
  }
};

exports.updatetodo = async (req, res) => {
  try {
    const data = await todo.findByIdAndUpdate(
      req.params.id,
      { $set: { content: req.body.content } },
      { new: true }
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("not updated");
    }
  } catch (err) {
    res.status(404).send("not updated");
  }
};

exports.deletetodo = async (req, res) => {
  try {
    const deletetodo = await todo.findOneAndDelete({ _id: req.params.id });
    if (deletetodo) {
      res.status(200).send("deleted");
    } else {
      res.status(404).send("something went wrong");
    }
  } catch (err) {
    res.status(404).send("something went wrong!");
  }
};
