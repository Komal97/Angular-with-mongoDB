const dbConfig=require("./config");
const  mongoose=require("mongoose");
mongoose.connect(dbConfig.url);              //connect is a function to connect to mongoDb
module.exports=mongoose;