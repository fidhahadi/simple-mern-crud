const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    name : {
        type: String,
        required:[true,"Please enter the Name"]
    },
    email : {
        type: String,
        required:[true,"Email is required"]
    },
    password  : {
        type    :String ,   
        required   :[ true ,"Password field cannot be empty"]
    },
    dob :{
        type     :String,
        required      : [true,'DOB is Required']
    }

})

module.exports = mongoose.model("users", Schema);