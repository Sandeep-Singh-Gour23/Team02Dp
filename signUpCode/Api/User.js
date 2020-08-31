const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
//const route = express.route();
const route = require('express').Router();
const { genSaltSync, hashSync } = require('bcrypt');

route.post('/',async(req,res)=>{
      const body = req.body;
      try{
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      let demo = {};
      demo.firstName = body.firstName;
      demo.lastName = body.lastName;
      demo.emailId = body.emailId;
      demo.password = body.password;
      let userModel = new User(demo);
      await userModel.save();
      res.json({
       success: 1,
        message: "you have registered successfully .."
      });
      }catch (err) {
        res.status(500).send(err);
      }
});

module.exports = route;
