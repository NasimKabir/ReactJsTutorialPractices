import React, { Component } from "react";

class WritePost extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <form>
                        <div className="form-group">
                             <label for="title">Title</label>
                             <input type="text" className="form-control" id="title" name="title" />
                        </div>

                        <div className="form-group">
                            <label for="body">Details</label>
                            <textarea className="form-control" name="body" id="body"/>
                        </div>
                                   
                         <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default WritePost