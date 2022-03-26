/**
 * updateStatus
 * @param {Array} toDoList - toDoList
 * @param {Object} toDoItem - toDoItem
 * @returns {React.Component} - toDoList
 * @private
 */
export const updateStatus = (toDoList, toDoItem) => {
  const foundIndex = toDoList.findIndex(item => item.id === toDoItem.id);
  let newState = [...toDoList];
  newState[foundIndex].status = !newState[foundIndex].status;
  return newState;
};

/**
 * updateTitle
 * @param {Array} toDoList - toDoList
 * @param {Object} toDoItem - toDoItem
 * @param {string} newTitle - newTitle
 * @returns {React.Component} - toDoList
 * @private
 */
export const updateTitle = (toDoList, toDoItem, newTitle) => {
  const foundIndex = toDoList.findIndex(item => item.id === toDoItem.id);
  let newState = [...toDoList];
  newState[foundIndex].title = newTitle;
  return newState;
};

/**
 * createTodoItem
 * @param {Array} toDoList - toDoList
 * @param {string} title - title
 * @returns {React.Component} - toDoList
 * @private
 */
export const createTodoItem = (toDoList, title) => {
  let newState = [...toDoList];
  newState.push({
    id: newState.length + 1,
    title: title,
    status: false,
  });
  return newState;
};

/**
 * deleteCompletedTask
 * @param {Array} toDoList - toDoList
 * @returns {React.Component} - toDoList
 * @private
 */
export const deleteCompletedTask = toDoList => {
  let newState = [...toDoList];
  newState = toDoList.filter(item => item.status === false);
  return newState;
};
