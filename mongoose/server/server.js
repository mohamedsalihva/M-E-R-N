const express = require ('express');
const app = express();
const mongoose = require('mongoose');
let dotenv = require('dotenv');
dotenv.config();



console.log("__dirname:",__dirname);

app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const schema = new mongoose.Schema({
  name : {

    type : String,
    required : true,
  },

  email : {

    type : String,
    required : true,
    unique :true,
  },

  password : {
    type : String,
    required : true,
  },
});

const model = mongoose.model("user_collec",schema)






app.get(`/test`,(req,res,next)=>{

   // res.status(200).send("sucess");
   next();

},(req,res,next)=> {

// res.status(200).send("sucess1");
 next()

},(req,res,next)=>{

   res.status(200).send("sucess2");    

})





app.post('/submit',async(req,res)=>{

  try {

    let body = req.body;
    console.log("body:", body);


    //validate

    let userfound =  await model.findOne({email:body.email});
    
    if(userfound){
      res.status(400).send("user email already exists");
      return;
    }

    let namefound = await model.findOne({name:body.name});

    if(namefound){
        res.status(400).send("user name already exists");
        return;
    }

    let passwordfound = await model.findOne({password:body.password});
    if(passwordfound){
       res.status(400).send(" user password Already existed");
       return
    }
     



     let new_user = await model.create(body);

    if(new_user){
      res.status(201).send("success");
      return
    }else{
      res.status(400).send("failed")
      return
    }
    
  } catch (error) {
    console.log("errorr:",error);
    res.status(400).send(error)
  }

});



app.get('/getData', async (req, res) => {
  try {
      const formDataArr = await model.find();
      res.status(200).json(formDataArr);
  } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
  }
});



app.put('/editData',async(req,res)=>{

  let data = req.body;
  console.log("data:",data);
  

  let finalData = {
    name : data.name,
    email : data.email,
    password : data.password,
  }

  let id = data.id;
  console.log("id : ",id);
  console.log("typeOf(id) : ",typeof(id));

  // let _id = new ObjectId(id);
  // console.log("_id : ",_id);
  // console.log("typeOf(_id) : ",typeof(_id));


  await model.updateOne({id},{$set : finalData})

  .then((message)=>{
    console.log("message : ",message);
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("success");
  })
  .catch((error)=>{
    console.log("error : ",error);
    res.writeHead(400,{"Content-Type" : "text/plain"});
    res.end("failed");
  })
  

})



 app.delete('/deleteData',async(req,res)=>{
    let data = req.body;
    console.log("data :",data)
    
    let finalData = {
      name : data.name,
      email : data.email,
      password : data.password,
    }

    let id = data.id;
    console.log("id : ",id);
    console.log("typeOf(id) : ",typeof(id));

    // let _id = new ObjectId(id);
    // console.log("_id : ",_id);
    // console.log("typeOf(_id) : ",typeof(_id));


    await model.deleteOne({id},{$set : finalData})
    .then((message)=>{
      console.log("message : ",message);
      res.writeHead(200,{"Content-Type" : "text/plain"});
      res.end("deleted");
    })
    .catch((error)=>{
      console.log("error : ",error);
      res.writeHead(400,{"Content-Type" : "text/plain"});
      res.end("failed");
    })
    
  })


    
  

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/users');
    console.log("database connection established");
    
} catch (error) {
  console.log("error:",error);


}finally{
  app.listen(process.env.PORT, () =>{
    console.log(`server running at http://localhost${process.env.PORT}`);
  })
}


}
  
  connect();