const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const PORT=4002;
const app=express();
app.use(bodyParser.json());
app.use(cors());

const posts={};

app.get('/posts',(req,res)=>{
res.send(posts);
});

app.post('/events',(req,res)=>{
 //   console.log(req.body);
const {type,data}=req.body;

if(type === 'PostCreated'){
const {id,title}=data;

posts[id]={id,title,comments : []};
}

if(type === 'CommentCreated'){
 const {id,content,postId,status} =data;

 const post=posts[postId];
 post.comments.push({id,content,status});
}

if(type === 'CommentUpdated'){
    const {id,content,postId,status}=data;

    const post=posts[postId];
    const comment=post.comments.find(comment =>{
        return comment.id === id;
    });

    comment.status=status;
    console.log("HEREHEREHERE " + comment.content);
    comment.content=content;
}
//console.log(posts);
res.send({});
});

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})