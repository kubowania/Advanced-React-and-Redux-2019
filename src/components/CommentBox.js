import React, {Component} from 'react';
import { connect } from 'react-redux'; //this will connect our global data to the file
import * as actions from 'actions'; //will grab all the actions out our actions/index.js file
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {
  state = { comment: ''};


  handleChange = (e) => {
    this.setState({ comment: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: ''})
  }

  //no parathesis on fetchComments as this is a CALLBACK we dont want to envoke the fucntion.
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments} >
        Fetch Comments
        </button>
      </div>
    )
  }
}



export default connect(null, actions)(requireAuth(CommentBox));
