import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { OrderedMap } from 'immutable'

const defaultArticles = normalizedArticles.reduce((articles, a) => {
    return articles.set(a.id, a)
  }, new OrderedMap({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)
        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId], article => {
                article.comments.push(payload.id)
                return article
            });
    }

    return articlesState
}