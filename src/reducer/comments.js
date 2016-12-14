import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, LOAD_ALL_COMMENTS } from '../constants'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map, List } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})
const defaultState = new ReducerState({
    entities: new Map({}),
    loadedPages: new List([]),
    total: 0
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities', 'entities'], arrayToMap(response, CommentModel))
        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments.mergeIn(['entities', 'entities'], arrayToMap(response.records, CommentModel))
                .setIn(['entities', 'total'], response.total)
                .entities.loadedPages.push(payload.page)

    }

    return comments
}