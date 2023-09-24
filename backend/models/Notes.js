const mongoose=require('mongoose');
const {Schema}=mongoose;
const NotesSchema=new Schema({
    user:{
         type: mongoose.Schema.Types.ObjectId
    },
    title:{
        type:String,
        required:true,
        minLength:[5,"title should have minimum 5 characters"]
    },
    description:{
        type:String,
        required:true,
        minLength:[5,"description should have minimum 5 characters"]
         
    },
    tag:{
        type:String,
        default:"General"

        
    },
    date:{
        type:Date,
        default:Date.now

    }
})
module.exports= mongoose.model('notes',NotesSchema);