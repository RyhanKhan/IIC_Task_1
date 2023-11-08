import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import TeamModel from "/Users/raihaanibnshakeel/Genesis Login Portal/backend/models/Team.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/team");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/register", (req, res) => {
  const { name, rollNo, event, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      TeamModel.create({ name, rollNo, event, email, password: hash })
        .then((teams) => res.json(teams))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  TeamModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      });
    } else {
      res.json("No record exists.");
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
