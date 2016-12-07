import { ADD_COMMENT } from '../constants'

let globalCommentId = 0

export default store => next => action => {
  switch (action.type) {
    case ADD_COMMENT:
      action.payload['id'] = globalCommentId ? globalCommentId++ : store.getState().comments.maxBy(c => c.id).id + 1
  }
  next(action)
}