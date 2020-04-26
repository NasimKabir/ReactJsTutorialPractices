import React, { Component } from "react";

class FormFields extends Component {
   state={
       name:""
   }


    changeFields=(event)=>{
          this.setState({name:event.target.value})
    }

    render() {
        return (
            <div className="App">
                <h1>Hello {this.state.name}</h1>
                <div>
                    <form>
                        <div>
                            <label>User Name: </label>
                            <input onChange={this.changeFields} type="text" name="username" /><br></br>
                            <button type="submit" >Submit</button>
                        </div>
                     </form>
                 </div>
            </div>
        )
    }
}

export default FormFields