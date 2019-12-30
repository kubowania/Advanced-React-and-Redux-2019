//this file starts with a non capital letter. this is a convention for naming files. the file will export by default a FUNCTION. (not a class)

import React, { Component } from 'react';
import { connect } from 'react-redux'

// THIS IS the boilerplate for the HOC!!

// Anytime that we call this HOC function and pass ih the ChildCompoent Class, we then
// create a new class called Composed Component, that has all the below funcitonality tied to it.
// The ComposedComponent Class will attempt to render the ChildComponent, aswell as componentDidMount
// and componentDidUpdate.
export default ChildComponent => {
  class ComposedComponent extends Component {

    // our Component just got rendered
    componentDidMount() {
      this.shouldNavigateAway()
    }

    // Our Component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        console.log('I NEED TO LEAVE')
        this.props.history.push('/')
      }
    }



///puts in all the props to the ChildComponent
    render() {
      return <ChildComponent { ...this.props }/>
      }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
}

// Imagine we are in CommentBox.js
//import requireAuth from 'components/requireAuth'

//class CommentBox {

//}

//export default requireAuth(CommentBox);

// Imagine we are in App.js. the below variable Comment Box gives us requre Auth with Comment Box.
//import CommentBox from 'components/CommentBox'
