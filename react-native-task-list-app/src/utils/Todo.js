export const updateStatus = (toDoList, toDoItem) => {
  const foundIndex = toDoList.findIndex(item => item.id === toDoItem.id)
  let newState = [...toDoList]
  newState[foundIndex].status = !newState[foundIndex].status
  return newState
}

export const updateTitle = (toDoList, toDoItem, newTitle) => {
  const foundIndex = toDoList.findIndex(item => item.id === toDoItem.id)
  let newState = [...toDoList]
  newState[foundIndex].title = newTitle
  return newState
}

export const createTodoItem = (toDoList, title) => {
  let newState = [...toDoList]
  newState.push({
    id: newState.length + 1,
    title: title,
    status: false
  })
  return newState
}

export const deleteCompletedTask = (toDoList) => {
  let newState = [...toDoList]
  newState = toDoList.filter(item => item.status === false)
  console.log(newState)
  return newState
}