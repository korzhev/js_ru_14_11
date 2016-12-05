import { ADD_COMMENT } from '../constants'

export function addComment(id, text, user) {
    return {
        type: ADD_COMMENT,
        payload: {
          id,
          text,
          user
        }
    }
}