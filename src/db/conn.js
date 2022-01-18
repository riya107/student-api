const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentsApi",{useCreateIndex:true,useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true}).then(()=>{
console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});
