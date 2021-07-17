const express=require('express');
const bodyParser=require('body-parser');
const {randomBytes}=require('crypto');
const axios=require('axios');
const PORT=4001; //unique from POSTS server ,because posts server is listening on 4000 port
const app =express();
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId={};

app.get('/posts/:id/comments',(req,res)=>{
 res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments',async (req,res)=>{

    const commentId=randomBytes(4).toString('hex');
    const {content}=req.body;

    const comments=commentsByPostId[req.params.id] || [];

    comments.push({
        id : commentId,
       content : content
    });

    commentsByPostId[req.params.id]=comments;

    await axios.post('http://localhost:4005/events',{
        type : 'CommentCreated',
        data : {
            id : commentId,
            content,
            postId : req.params.id
        }
    })
    res.status(201).send(comments);
});

app.post('/events',(req,res)=>{
    console.log('Received Event',req.body.type);
  
    res.send({});
  });
  
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

