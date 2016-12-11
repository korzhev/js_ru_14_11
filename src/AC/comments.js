import { ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS } from '../constants'
import jquery from 'jquery'


export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadComments(id) {
    console.log(id)
    return (dispatch) => {
        dispatch({
            type: LOAD_ALL_COMMENTS + START,
            payload: { id }
        })

        setTimeout(() => {
            jquery.get('/api/comment/', { article: id })
              .done(response => dispatch({
                  type: LOAD_ALL_COMMENTS + SUCCESS,
                  payload: { id, comment: response }
              }))
              .fail(error => dispatch({
                  type: LOAD_ALL_COMMENTS + FAIL,
                  payload: { id, error}
              }))
        }, 1000)
    }
}