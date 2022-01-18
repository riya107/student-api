const express = require("express");
const studentRouter=require("./routers/routs");

require("./db/conn");

const app = express();

const port = process.env.PORT || 3000;
app.use(function(req, res, next){
    next();
  });

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(studentRouter);

app.listen(port, () => {
    console.log(`Connection is setup at port ${port}`);
});

