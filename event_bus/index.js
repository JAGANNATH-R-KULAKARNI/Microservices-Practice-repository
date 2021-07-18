const express=require('express');
const bodyParser=require('body-parser');
const axios=require('axios');
const PORT=4005;
const cors=require('cors');
const app=express();
app.use(bodyParser.json());

app.post('/events',async (req,res)=>{
    const event=req.body;
  //console.log(event)
   await axios.post('http://localhost:4000/events',event).then((u)=>console.log("u")).catch((err)=>console.log("err"));
   await axios.post('http://localhost:4001/events',event).then((u)=>console.log("u")).catch((err)=>console.log("err"));
   await axios.post('http://localhost:4002/events',event).then((u)=>console.log("u")).catch((err)=>console.log("err"));

    res.send({status : 'OK'});
});

app.listen(PORT,()=>{
 console.log(`listening on ${PORT}`);
});