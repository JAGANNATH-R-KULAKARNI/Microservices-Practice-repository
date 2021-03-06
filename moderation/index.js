const express=require('express');
const bodyParser=require('body-parser');
const axios=require('axios');
const PORT=4003;

const app=express();
app.use(bodyParser.json());

app.post('/events',async (req,res)=>{
 const {type,data}=req.body;

 if(type === 'CommentCreated')
 {
     const status=data.content.includes('orange') ? 'rejected' : 'approved';
     const content=data.content.includes('orange') ? 'This comment is against community guidlines' : data.content;

     await axios.post('http://localhost:4005/events',{
         type : 'CommentModerated',
         data : {
             id : data.id,
             postId : data.postId,
             status,
             content : content
         }
     });

     res.send({});
 }
});

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});
