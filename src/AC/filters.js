import { FILTER_ARTICLE } from '../constants'

//лучше разбей на 2 AC, ведь это 2 дазных типа фильтров
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
