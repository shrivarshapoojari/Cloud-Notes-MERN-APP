const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:[true, "Username is Required"],
        minLength:[5,"Name must have atleast 5 characters"],
        maxLength:[50,"Name should be within 50 characters"],
        trim:true
        
    },
    email:{
        type:String,
        required:[true,"User email is requied"],
        lowercase:true,
        unique:[true,"Already Registered Email"]
        
    },
    password:{
        type:String,
        required:true,
        minLength:[5,"Password  must have atleast 5 characters"]
    },
    date:{
        type:Date,
        default:Date.now

    }
})
module.exports=mongoose.model('user',UserSchema);