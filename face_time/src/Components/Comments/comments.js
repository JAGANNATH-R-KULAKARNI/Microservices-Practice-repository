import axios from 'axios';
import React from 'react';
import CommentUI from './ButtonUI';

class Comments extends React.Component
{
    constructor()
    {
     super();
     this.state={
         comment : '',
         comments : null,
     };

     this.commentChangeHandler=this.commentChangeHandler.bind(this);
     this.submitCommentHandler=this.submitCommentHandler.bind(this);
     this.getCommentsForPost=this.getCommentsForPost.bind(this);
    }

    componentDidMount()
    {
     console.log(this.props.comments)   
     this.setState({
        comments : this.props.comments
    })
   //  this.getCommentsForPost();
    }

    commentChangeHandler(e)
    {
     this.setState({
         [e.target.name] : e.target.value
     });

    }

    async getCommentsForPost()
    {
     await axios.get(`http://localhost:4001/posts/${this.props.Postid}/comments`).then((u)=>{
         console.log(u['data']);
         this.setState({
             comments : u['data']
         })
     })
     .catch((err)=>{
         console.log(err);
     })
    }

    async submitCommentHandler()
    {
     await axios.post(`http://localhost:4001/posts/${this.props.Postid}/comments`,{
         content : this.state.comment
     })
     .then((u)=>{
         console.log("comment success : "+u);
         this.setState({
             comment : ''
         });
         this.getCommentsForPost();
     })
     .catch((err)=>{
         console.log("comment error : "+err);
         this.setState({
            comment : ''
        });
     })
    }

    render()
    {
        return (
            <div>
                <CommentUI commentChangeHandler={this.commentChangeHandler} submitCommentHandler={this.submitCommentHandler}/>
                <br />
                <b>Comments</b>
                <br />
                 <ul>
                     {this.state.comments && this.state.comments.map((key)=>{
                         return <li key={key['id']}>{key['content']}</li>
                     })}
                 </ul>
            </div>
        );
    }
}

export default Comments;