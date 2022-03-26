export const generateTodoList = () => (
	[
    {
      id: 1,
      title: 'Get a new light bulb for kitchen',
      status: false
    },
    {
      id: 2,
      title: 'Call the doctor',
      status: false
    },
    {
      id: 3,
      title: 'Workout'
    },
    {
      id: 4,
      title: 'Get a new light bulb for kitchen',
      status: false
    },
    {
      id: 5,
      title: 'Call the doctor',
      status: false
    },
    {
      id: 6,
      title: 'Workout',
      status: false
    },
    {
      id: 7,
      title: 'Get a new light bulb for kitchen',
      status: false
    },
    {
      id: 8,
      title: 'Call the doctor',
      status: false
    },
    {
      id: 9,
      title: 'Workout',
      status: false
    },
    {
      id: 10,
      title: 'Get a new light bulb for kitchen',
      status: false
    },
    {
      id: 11,
      title: 'Call the doctor',
      status: false
    },
    {
      id: 12,
      title: 'Workout',
      status: false
    }
  ]
)

export const updateStatus = (toDoList, toDoItem) => {
  const foundIndex = toDoList.findIndex(item => item.id === toDoItem.id)
  let newState = [...toDoList]
  newState[foundIndex].status = !newState[foundIndex].status
  return newState
}