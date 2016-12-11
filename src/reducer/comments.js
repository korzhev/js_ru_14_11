import { LOAD_COMMENTS, ADD_COMMENT, SUCCESS, FAIL, START } from '../constants'
import { arrayToMap } from '../utils'
import { Record } from 'immutable'


const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = arrayToMap([], CommentModel);

export default (comments = defaultState, action) => {
    const { type, payload, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})
        case LOAD_COMMENTS + SUCCESS:
            return comments.merge(arrayToMap(payload.response, CommentModel))
    }

    return comments
}