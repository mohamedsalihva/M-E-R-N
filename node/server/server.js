// console.log("helllo world")

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const http = require('http');
const url = require('url');
const fs = require('fs')
const queryString = require('querystring')
const port= 3000;
const {MongoClient, DB} = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017")
const server = http.createServer(async(req,res) =>{
const db = client.db("users");
const collection = db.collection("user_coll")



  //get the request url
  console.log("url:",req.url);

  //parse the request url
  const parsed_url = url.parse(req.url);
  console.log("parsed_url:",parsed_url)

  //serve the html file on root request
  if(parsed_url.pathname === '/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fs.readFileSync('../client/index.html'));
  }

  //handle form submission on post request to /sumbit
 if(parsed_url.pathname === '/submit' && req.method === 'POST'){
  let body ='';


  //collect the data as its comes in chunks
    req.on('data',(chunk)=>{
    console.log("chunk:",chunk);
    console.log("chunk.toString() :",chunk.toString() );
    body = body + chunk.toString();
    console.log("body:",body);
  });


  //prosess the form data on end of the request
  req.on('end',()=> {
  const Datanode = queryString.parse(body);
  console.log("Datanode:",Datanode);


  //do something withthe submitted data (eg ; savet to the database)
  console.log("name:", Datanode.name);
  console.log("email:", Datanode.email);
  console.log("password:", Datanode.password);
  })

  res.writeHead(200,{'content-type':'text/plain'});
  res.end('form submitted succesfully');
 }

if(parsed_url.pathname === '/getData' && req.method === 'GET'){
  //retreive dorm data from the collectoin in database
  let formData = await collection.find().toArray();
  console.log("formData:", formData);

  let jsonFormdata =JSON.stringify(formData);
  console.log("formData:",formData);

  res.writeHead(200,{"Content-Type" : "Text/json"});
  res.end(jsonFormdata);
}

});

 async function connect(){
  try {
    await client.connect();
    console.log("database connection established");
  } catch (error) {
    console.log("database connection not established");
    console.log("error:",error)
  }finally{

    server.listen(port,()=>{
      console.log(`server running at http://localhost:${port}`);
      });
  }
}
connect();