import React from 'react';
import axios from 'axios';
import ButtonUI from './ButtonUI';
import TextAreaUI from './TextAreaUI';
import PostUI from './postUI';

class Posts extends React.Component
{
    constructor()
    {
        super();
        this.state={
         comment : '',
         posts : null
        };

        this.textChangeHandler=this.textChangeHandler.bind(this);
        this.submitButtonHandler=this.submitButtonHandler.bind(this);
        this.fetchPosts=this.fetchPosts.bind(this);
    }

    async fetchPosts()
    {
        await axios.get('http://localhost:4000/posts').then((u)=>{
            console.log(u);
            console.log(u['data']);
  
            this.setState({
                posts : u['data']
            })
          
            
        })
        .catch((err)=>{
            console.log(err);
        });
    }


    componentDidMount()
    {
     this.fetchPosts();
    }


    textChangeHandler(e)
    {
         this.setState({
             [e.target.name] : e.target.value
         });
    }

    async submitButtonHandler()
    {
     await axios.post('http://localhost:4000/posts',{
         title : this.state.comment
     })
     .then((u)=>{
         this.setState({
             comment : '',
         });
         console.log("success : "+ u);
         this.fetchPosts();
     })
     .catch((err)=>{
        this.setState({
            comment : '',
        });

        console.log("Error : "+err);
     })
    }

    render()
    {
        return (
            <div>
                <br />
                <br />
                <br />
                <form>
                    <b>POST </b>
                    <br />
                    <br />
                    <TextAreaUI textChangeHandler={this.textChangeHandler}/>
                    <ButtonUI submitButtonHandler={this.submitButtonHandler}/>
                    <br />
                    <br />
                    <br />
                    <b>POSTS</b>
                    {this.state.posts &&  
                   Object.keys(this.state.posts).map((key)=>{
                         return <PostUI key={this.state.posts[key]['id']} id={this.state.posts[key]['id']} comment={this.state.posts[key]['title']}/>;
                        })
                    }
                </form>
            </div>
        );
    }
}

export default Posts;