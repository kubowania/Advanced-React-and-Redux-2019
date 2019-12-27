import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export function saveComment(comment) {  //this function wll save comments whenever imported into a file and envoked
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}


export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments') //remove 's' from https for security passing

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
