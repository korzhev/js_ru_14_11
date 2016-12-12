import { ADD_COMMENT, START, SUCCESS, FAIL, LOAD_COMMENTS } from '../constants'
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
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { id }
        })

        setTimeout(() => {
              //ок, но луче было загружать не все сразу. В часте обсуждали нужный endpoint
            jquery.get('/api/comment/', { article: id })
              .done(response => dispatch({
                  type: LOAD_COMMENTS + SUCCESS,
                  payload: { id, response },
              }))
              .fail(error => dispatch({
                  type: LOAD_COMMENTS + FAIL,
                  payload: { id, error}
              }))
        }, 1000)
    }
}
