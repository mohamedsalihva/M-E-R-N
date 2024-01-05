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
const querystring =('querystring')
const port= 3000;
const {MongoClient} = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017")
const server = http.createServer((req,res) =>{

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
    console.log("chunk.tostring():",chunk.tostring());
    body = body + chunk.tostring();
    console.log("body:",body);
  });


  //prosess the form data on end of the request
  req.on('end',()=> {
  const formDatanode = querystring.parse(body);
  console.log("formData:",formData);


  //do something withthe submitted data (eg ; savet to the database)
  console.log("name:", formData.name);
  console.log("email:", formData.email);
  console.log("password:", formData.password);
  })

  res.writeHead(200,{'content-type':'text/plain'});
  res.end('form submitted succesfully');
 }



});

 async function connect(){
  try {
    await client.connect();
    console.log("database connectiopn established");
  } catch (error) {
    console.log("database connectiopn not established");
    console.log("error:",error)
  }finally{

    server.listen(port,()=>{
      console.log(`server running at http://localhost:${port}`);
      });
  }
}
connect();