import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { OrderedMap } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new OrderedMap({}))

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return comments
}