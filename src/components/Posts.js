import React from 'react';
import axios from 'axios';


class Posts extends React.Component{
    state={
        post:'loading'
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.location.pathname}`)
        .then(response=>{
            this.setState({post: response.data})
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.history.location.pathname}</h1>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default (Posts)