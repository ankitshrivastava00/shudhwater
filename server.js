const express=require('express');
const mongoose=require('mongoose');

const app=express();
const db_url="mongodb://shudhwater:WiKxbLi769tXUvM@ds211865.mlab.com:11865/shudhwater"
mongoose.connect(db_url).catch(err=>console.log(err));

//Databse
const test_schema=new mongoose.Schema({name:String,age:Number});
const test_model=new mongoose.model("test",test_schema);
const db=new test_model
db.name="abhinav";
db.age=22;
db.save().then(user=>{console.log(user)}).catch(err=>console.log(err));

app.listen(process.env.PORT||3002);