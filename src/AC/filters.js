import { FILTER_ARTICLE } from '../constants'

export function filterArticle(id, from, to) {
    let payload ={}
    if (id !== undefined) payload['id']=id
    if (from !== undefined) payload['from']=from
    if (to !== undefined) payload['to']=to
    return {
        type: FILTER_ARTICLE,
        payload
    }
}