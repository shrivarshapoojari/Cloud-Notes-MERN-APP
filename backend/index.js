const connectToMongo=require('./db');
const express=require('express')
const app=express();
const auth=require('./routes/auth');
const notes=require('./routes/notes')

app.use(express.json());
app.use(express.urlencoded({extended:true}))


 connectToMongo();

 app.get("/",(req,res)=>{
    res.send("Hello")
 })
 
 app.use('/api/auth', auth);
 app.use('/api/notes', notes)










 app.listen(5000,()=>{
    console.log("Server Up on port 5000")
 })