import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]; //takes all our exisitng comments and puts them in the array, then adds the new comment
    case FETCH_COMMENTS:
      debugger;
      const comments = action.payload.data.map(comment => comment.name)
      return [...state, ...comments]
    default:
    return state;
  }
}
