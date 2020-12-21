import React from 'react';
import axios from 'axios';

class Home extends React.Component{
    state={
        json_data:[]
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response=>{
                let y = response.data
                let z = this.state.json_data.concat(y)
                this.setState({json_data: z})
            })
    }
    display_json_data = ()=>{
        return this.state.json_data.map((data, index)=>{
            if(index<=10){
                return(
                    <div key={Math.random()}>
                        <h2>{data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                )
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
                {this.state.json_data.length>0?this.display_json_data():<p>Loading...</p>}
            </div>
        )
    }
}

export default Home