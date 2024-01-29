 const express = require('express')
const app = express()
const dotenv = require ('dotenv');
const path = require('path');
const fs = require('fs');
dotenv.config();

app.use(express.json());

app.get('/test', (req, res) =>{
   res.status(200).send("success")
} );

app.post('/submit',(req,res)=>{
    const datas = req.body;
    console.log("datas:",datas);
    let datas_arr = [];
    datas_arr.push(datas);


    let json_datas = JSON.stringify(datas_arr);
    let folderpath = './datas';
    let fileName = 'datas.json';
    let filepath = path.join(folderpath,filename);


    if (!fs.existsSync(folderpath)){
        fs.mkdirSync(folderpath,{recursive : true });
    }
    fs.writeFile(filepath,json_datas,(err)=>{
        if (err){
            res.status(400).send("failed")
        }else{
            res.status(200).send("success")
        }
    })
})
app.listen(process.env.port, () =>{

 console.log(`server runninng at http://localhost:${process.env.port}`);

})


