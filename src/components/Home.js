import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
                    <Link key={Math.random()} to={`/${data.id}`}>
                        <div className="Post">
                            <h2>{data.title}</h2>
                            <p>{data.body}</p>
                        </div>
                    </Link>
                )
            }
        })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Home</h1>
                {this.state.json_data.length>0?this.display_json_data():<p>Loading...</p>}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state.President)
    return {
        state: state.President
    }
}

export default connect(mapStateToProps)(Home)