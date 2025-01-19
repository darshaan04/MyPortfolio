const mongoose = require("mongoose");
const validator = require("validator")
const userSchema = new mongoose.Schema({
    name:{ 
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    messages:[]
})
userSchema.methods.Messagesave = async function(message){
    try{
        this.messages = this.messages.concat({message})
        await this.save()
        return message;
    }
    catch(error)
    {
        console.log(error)
    }
}
const portfolio_collection = new mongoose.model("portfolio_collection", userSchema);

module.exports = portfolio_collection;