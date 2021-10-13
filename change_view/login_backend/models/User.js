const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema

const userSchema = new Schema({
    name :{
        type: String,
        required : [true,"Please provide a username"]
    },
    email :{
        type: String,
        required : [true,"Please provide a valid email"],
        unique: true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
            
    },
    password :{
        type: String,
        required : [true,"Please add a password "],
        minlength:6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
    
},{timestamps:true})

userSchema.pre("save",async function(next){

        if(!this.isModified('password')){
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    
})
userSchema.methods.matchPassword  = async function(password){
    return await bcrypt.compare(password,this.password)
}
const User = mongoose.model('User',userSchema);

module.exports = User;