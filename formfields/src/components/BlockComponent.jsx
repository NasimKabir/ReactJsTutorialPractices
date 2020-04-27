import React,{ Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import WritePost from "./WritePost";

class BlockComponent extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                 this.setState({
                     posts:response.data
                 })
            })
            .catch((error)=>{
                  console.log(error)
                })
    }

render(){
    return(
            <div className="container">
                <Link to="/add">Add Post</Link>
                    <h1>List of Post</h1>
                    <table className="table table-lg">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    this.state.posts.map(post =>
                                                        <tr key={post.id}>
                                                            <td>{post.id}</td>
                                                            <td>{post.title}</td>
                                                            <td>{post.body}</td>
                                                        </tr>
                                                       )
                                }

                        </tbody>
                    </table>
              </div>
    )
}
}
export default BlockComponent