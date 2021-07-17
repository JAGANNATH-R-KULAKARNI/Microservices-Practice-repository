const express=require('express');
const bodyParser=require('body-parser');
const axios=require('axios');
const PORT=4005;
const app=express();
app.use(bodyParser.json());

app.post('/events',(req,res)=>{
    const event=req.body;

    axios.post('http://localhost:4000/events',event).then((u)=>console.log(u)).catch((err)=>console.log(err));
    axios.post('http://localhost:4001/events',event).then((u)=>console.log(u)).catch((err)=>console.log(err));
    axios.post('http://localhost:4002/events',event).then((u)=>console.log(u)).catch((err)=>console.log(err));

    res.send({status : 'OK'});
});

app.listen(PORT,()=>{
 console.log(`listening on ${PORT}`);
});