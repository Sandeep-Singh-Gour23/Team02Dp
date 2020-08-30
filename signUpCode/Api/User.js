const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
//const route = express.route();
const route = require('express').Router();

route.post('/',async(req,res)=>{
      const{firstName,lastName,emailId,password} = req.body;
      try{
      let demo = {};
      demo.firstName = firstName;
      demo.lastName = lastName;
      demo.emailId = emailId;
      demo.password = password;
      let userModel = new User(demo);
      await userModel.save();
      res.json(userModel);
      }catch (err) {
        res.status(500).send(err);
      }
});

module.exports = route;