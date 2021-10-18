const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const friendSchema = new Schema({
    email :{
        type: String
    },
    friend :{
        type: Array
    },
    
},{timestamps:true})

const Friends = mongoose.model('User',friendSchema);

module.exports = Friends;