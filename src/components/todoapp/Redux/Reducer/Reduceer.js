

  const todoReducer = (state = {todos:[]}, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };

      case 'REMOVE_TODO':
          const updatedTodos = state.todos.filter(todo => todo !== action.payload);
          console.log("remove todo",action.payload);
            
            return {...state,todos: updatedTodos};
      default:
        return state;
    }
  };
  
  export default todoReducer;