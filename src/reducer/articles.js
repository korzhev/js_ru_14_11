import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { OrderedMap } from 'immutable'

const defaultArticles = normalizedArticles.reduce((articles, a) => {
    return articles.set(a.id, a)
  }, new OrderedMap({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)
    }

    return articlesState
}