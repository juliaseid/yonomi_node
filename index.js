import express from "express";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import {allDevices} from "/queries.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.render('index')
})