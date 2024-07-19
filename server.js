const connect = require("./config/connectdb");
require("dotenv").config();
const express = require("express");
const person = require("./Model/person");
const app = express();
const port = process.env.port;

connect();

const addperson = async () => {
  try {
    const newperson = new person({
      name: "yosra",
      age: "29",
      favoriteFood: ["pizza", "cheescake"],
    });
    await newperson.save();
  } catch (error) {
    console.log(error);
  }
};

addperson();

const addmany = async () => {
  try {
    const addpeople = await person.create(
      {
        name: "yosra3",
        age: 29,
        favoriteFoods: ["pizza", "glace", "burritos"],
      },
      {
        name: "amine",
        age: 32,
        favoriteFoods: ["spagatti", "turamisu", "burritos"],
      },
      {
        name: "raja",
        age: 32,
        favoriteFoods: ["spagatti", "turamisu", "burritos"],
      },
      { name: "nesrine", age: 32, favoriteFoods: ["spagatti", "turamisu"] },
      {
        name: "anwar",
        age: 32,
        favoriteFoods: ["spagatti", "turamisu", "burritos"],
      }
    );
  } catch (error) {
    console.log(error);
  }
};
addmany();

const find = async () => {
  try {
    const findpeople = await person.findOne({ favoriteFoods: "glace" });
    console.log(findpeople);
  } catch (error) {
    console.log(error);
  }
};

find();

const findbyid = async () => {
  try {
    const findpeople = await person.findById("669963ed33f7eb023c9990e1");
    console.log(findpeople);
  } catch (error) {
    console.log(error);
  }
};
findbyid();

const find_edit_save = async () => {
  try {
    const findpeople = await person.findById("669963ed33f7eb023c9990e1");
    console.log(findpeople);
    if (findpeople) {
      findpeople.favoriteFoods.push("hamburger");
      await findpeople.save();
    }
  } catch (error) {
    console.log(error);
  }
};
find_edit_save();

const findOneAndUpdate = async () => {
  try {
    const result = await person.findOneAndUpdate(
      { name: "yosra" },
      { age: 20 },
      { new: true }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
findOneAndUpdate();

const Remove = async () => {
  try {
    const result = await person.findByIdAndDelete("669968c1e76821036984aa3b");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
Remove();

const Removemany = async () => {
  try {
    const result = await person.deleteMany({ name: "Mary" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
Removemany();

const find_sort_limit_select = async () => {
  try {
    const findpeople = await person
      .find({ favoriteFoods: "burritos" })
      .sort("name")
      .limit(2)
      .select("-age")
      .exec((err, findpeople) => {
        if (err) return handleError(err);
        console.log(findpeople);
      });
  } catch (error) {
    console.log(error);
  }
};

find_sort_limit_select();

app.listen(port, () => {
  console.log("server is running");
});
