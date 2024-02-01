const express = require ('express');
const app = express();
const mongoose = require('mongoose');
let dotenv = require('dotenv')
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

    let userfound = await model.findOne({email:body.email});
   

    if(userfound){
      res.status(400).send("user already exists");
      return;
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




app.get('/getData',async(req,res) => {

  const formData = collection.find();
  console.log("formData : ",formData);

  const formDataArr = await formData.toArray();
  console.log("formDataArr : ",formDataArr);

  let jsonFormData = JSON.stringify(formDataArr);
  console.log("jsonFormData : ",jsonFormData);




   res.status(200).send(jsonFormData)
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

  let _id = new ObjectId(id);
  console.log("_id : ",_id);
  console.log("typeOf(_id) : ",typeof(_id));


  await collection.updateOne({_id},{$set : finalData})
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

    let _id = new ObjectId(id);
    console.log("_id : ",_id);
    console.log("typeOf(_id) : ",typeof(_id));

    

    await collection.deleteOne({_id},{$set : finalData})
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
    
} catch (error) {
  console.log("error:",error);
  console.log("database connection established");

}finally{
  app.listen(process.env.PORT, () =>{
    console.log(`server running at http://localhost${process.env.PORT}`);
  })
}


}
  
  connect();