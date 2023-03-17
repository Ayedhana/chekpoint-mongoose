

const express = require("express");

const app = express();
require("dotenv").config({ path: "./.env" });
const connectDB = require("./config/connectDB");

const Person = require("./model/Person");
//Create_and_Save_a_Record_of_a_Mode
Person.insertMany([
  {
    name: "Jabri Youssef",
    age: 25,
    favoriteFoods: ["couscous", "poulet", "brik"],
  },
]).then((insertedElement) => {
  console.log("The Inserted Elemenmt: ", insertedElement);
});

//Create_Many_Records_with_model.create()*
Person.create([
  {
    name: "Person X",
    age: 34,
    favoriteFoods: ["favFoodFour", "favFoodFive"],
  },
  {
    name: "Person Y",
    age: 43,
    favoriteFoods: ["favFoodSix", "favFoodSeven"],
  },
  {
    name: "Person Z",
    age: 19,
    favoriteFoods: ["favFoodEight", "favFoodNine"],
  },
]).then((insertedElement) => {
  console.log("The Inserted Elemenmt: ", insertedElement);
});
//Use_model.find()_to_Search_Your_Database
Person.find().then((remainingPerson) => {
  console.log(remainingPerson);
});
//Use_model.findOne()
Person.findOne().then((remainingPerson) => {
  console.log(remainingPerson);
});
//Use_model.findById()
let id = "616adc1542221ee3848c8903"; //just exemple
Person.findById(id, function (err, docs) {
  console.log(docs);
});
//model.findOneAndUpdate();

Person.findOneAndUpdate({ name: "Firas Djebby" }, { $set: { age: "26" } }).then(
  (updatedPerson) => {
    console.log("Updated Person: ", updatedPerson);
  }
);
//model.findByIdAndRemove()
let _id = "616adc1542221ee3848c8903"; //just exemple
Person.findByIdAndRemove(_id, function (err, docs) {
  console.log("Removed Person :", docs);
});
//model.remove()
Person.remove({ name: "Firas Djebby" }).then((removedPersons) => {
  console.log("Removed Person :", removedPersons);
});



app.listen(process.env.Port, () => {
  console.log(`The Server is Running ${process.env.Port}....`);
});