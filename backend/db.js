const mongoose=require('mongoose');
const express=require('express');
const mongoURI='mongodb://127.0.0.1:27017/clouddb'

const connectToMongo=async()=> {
    await mongoose.connect(mongoURI).then(()=>{
    console.log("Successfully connected to DataBase")
  }).catch((e)=>{
    console.log(e);
  })
}
module.exports=connectToMongo