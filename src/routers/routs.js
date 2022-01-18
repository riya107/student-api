const express=require("express");
const Student=require("../models/students");

const studentRouter=express.Router();

studentRouter.post("/students", async function (req, res) {
    try {
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
      }
      catch(err){
          res.status(400).send(err);
      }
});

studentRouter.get("/students",async function(req,res){
    try{
        console.log(req.query);
        const studentsData=await Student.find();
        res.send(studentsData);
    }
    catch(err){
        res.status(500).send(err);
    }
});
studentRouter.get("/students/:id",async function(req,res){
    try{
        const studentData=await Student.findOne({_id:req.params.id});
        if(!(studentData)){
            return res.status(400).send("Invalid Id");
        }
        res.send(studentData);
    }
    catch(err){
        res.status(500).send(err);
    }
});
studentRouter.delete("/students/:id",async function(req,res){
    try{
        const studentDelete=await Student.findByIdAndDelete({_id:req.params.id});
        if(!(studentDelete)){
            return res.status(400).send("Invalid Id");
        }
        res.send(studentDelete);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});
studentRouter.patch("/students/:id",async function(req,res){
    try{
        const studentUpdate=await Student.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true,runValidators:true});
        if(!(studentUpdate)){
            return res.status(400).send("Invalid Id");
        }
        res.status(201).send(studentUpdate);
    }
    catch(err){
        res.status(500).send(err);
    }
});

module.exports=studentRouter;