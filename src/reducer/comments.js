import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { OrderedMap } from 'immutable'
import { ADD_COMMENT } from '../constants'


const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new OrderedMap({}))

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action
    switch (type) {
        case ADD_COMMENT:
            return comments.set(payload.id, {...payload})
    }

    return comments
}