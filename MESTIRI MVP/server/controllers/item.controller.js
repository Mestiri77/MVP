

const teacher = require('../database-mongo/Item.model.js');


// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
const selectAll = async function (req, res) {
  try {
    const teachers = await teacher.find({});
    res.status(200).send(teachers);
  } catch (error) {
    res.status(200).send(error);
  }
};

const add = async (req, res) => {
  try {
    const save = await teacher.create(req.body)
    res.json(save)
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const dell = req.params.id
    const del = await teacher.deleteOne({ _id: dell })
    res.json(del)
  } catch (error) {
    console.log(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const updated = await teacher.findOneAndUpdate(filter, req.body)
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
};

const updateComments = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const push = { $push: { comments: req.body.comments } }
    const updated = await teacher.findOneAndUpdate(filter, push)
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
};
const updateMessage = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const push = { $push: { messages: req.body.messages } }
    const updated = await teacher.findOneAndUpdate(filter, push)
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
};
const updateLevels = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const push = { $push: { levels: req.body.levels } }
    const updated = await teacher.findOneAndUpdate(filter, push)
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
};
const updateSubjects = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const push = { $push: { subjects: req.body.subjects } }
    const updated = await teacher.findOneAndUpdate(filter, push)
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
};

const updateRate = async (req, res) => {
  try {
    const filter = { _id: req.params.id }
    const push = { $push: { rate : req.body.rate } }
    const updated = await teacher.findOneAndUpdate(filter, push)
    res.json(updated)
  } catch (error) {
    console.log(error);
  }
};



module.exports = { selectAll,add, deleteOne, updateOne, updateComments, updateMessage, updateLevels, updateSubjects,updateRate };
