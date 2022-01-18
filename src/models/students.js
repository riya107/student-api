const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(!(validator.isEmail(value))){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:String,
        required:true,
        validate(value){
            return (/^[1-9][0-9]{9}$/.test(value));
        }
    
    },
    address:{
        type:String,
        required:true
    }
});
const Student = mongoose.model("Student",studentSchema);

module.exports=Student;