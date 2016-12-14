import { ADD_COMMENT, LOAD_COMMENTS, LOAD_ALL_COMMENTS } from '../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function checkAndLoadComments(articleId) {
    return (dispatch, getState) => {
        const { commentsLoaded, commentsLoading } = getState().articles.getIn(['entities', articleId])
        if (commentsLoaded || commentsLoading) return null
        dispatch({
            type: LOAD_COMMENTS,
            payload: { articleId },
            callAPI: `/api/comment?article=${articleId}`
        })
    }
}

export function loadAllComments(page) {
  return (dispatch, getState) => {
    const limit = 5;
    const offset = (page - 1) * limit;

    const loadedPages = getState().comments.entities.loadedPages;
    console.log('>>>', getState().comments.entities)
    if (loadedPages.includes(page)) return null
    dispatch({
      type: LOAD_ALL_COMMENTS,
      payload: { page },
      callAPI: `/api/comment?limit=${limit}&offset=${offset}`
  })
}
}