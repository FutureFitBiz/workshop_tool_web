import store from '@/tool/store.js'

export function checkLogic(logic, answers, externalAnswers) {
  //  logic is [[any] & [any]]
  // ie. every([some], [some])
  // put them all in one, so we don't loop everytime
  let answerValues = Object.values(answers)
  let externalAnswerValues = []
  if (externalAnswers) {
    answerValues.concat(Object.values(externalAnswers))
  }

  return logic.every((anyArray, index1, arr1) => {
    return anyArray.some((questionCode, index, arr) => {
        return answerValues.includes(questionCode)
    })
  })
}

export function findProduct(code) {
  for (let item of store.state.products) {
    if (item.path === code) {
      return item
    }
  }
}

export function addOrRemove(item, items) {
  return items.includes(item) ? items.filter(i => i !== item) : [ ...items, item ]
}
