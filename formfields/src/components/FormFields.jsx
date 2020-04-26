import React, { Component } from "react";

class FormFields extends Component {
   state={
       name:"",
       email:"",
       phone:"",
       city:""
   }


    changeFields=(event)=>{
          this.setState({name:event.target.value})
    }

    submitform=(event)=>{
        event.preventDefault()
        console.log(this.state.name)
    }
    render() {
        return (
            <div className="App">
                <h1>
                    {this.state.name}<br></br>
                    {this.state.email}<br></br>
                    {this.state.phone}<br></br>
                    {this.state.city}<br></br>
                </h1>
                <div>
                    <form onSubmit={this.submitform}>
                        <div>
                            <label>User Name: </label>
                            <input onChange={this.changeFields} type="text" name="username" /><br></br>
                            <label>email: </label>
                            <input onChange={this.changeFields} type="email" name="email" /><br></br>
                            <label>phone: </label>
                            <input onChange={this.changeFields} type="number" name="phone" /><br></br>
                            <label>city: </label>
                            <input onChange={this.changeFields} type="text" name="city" /><br></br>

                            <button type="submit" >Submit</button>
                        </div>
                     </form>
                 </div>
            </div>
        )
    }
}

export default FormFields