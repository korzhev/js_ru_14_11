import { ADD_COMMENT } from '../constants'

let globalCommentId = 0

export default store => next => action => {
    //лучше придумать более общий способ; через мидлвару будут проходить все экшины, их стоит делать максимально реюзабельными
  switch (action.type) {
    case ADD_COMMENT:
      //Плохая логика для генерации id
      //лучше не мутировать объект
      action.payload['id'] = globalCommentId ? globalCommentId++ : store.getState().comments.maxBy(c => c.id).id + 1
  }
  next(action)
}
