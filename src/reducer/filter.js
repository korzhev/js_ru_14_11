import { FILTER_ARTICLE } from '../constants'

const filterDefault = {
    from: null,
    to: null,
    id: null
}

export default (filterState = filterDefault, action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_ARTICLE:
            return Object.assign({}, filterState, payload);
    }
    return filterState
}
