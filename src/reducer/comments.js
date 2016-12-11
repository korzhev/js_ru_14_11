import { LOAD_ALL_COMMENTS, ADD_COMMENT, SUCCESS, FAIL, START } from '../constants'

import { normalizedComments } from '../fixtures'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'


const CommentModel = Record({
    id: null,
    user: null,
    text: null,
})

const defaultComments = arrayToMap([], normalizedComments)

const defaultState = new ReducerState({
    entities: defaultComments,
    loading: false
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})
        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
              .set('entities', arrayToMap(response, CommentModel))
              .set('loading', false)
    }

    return comments
}