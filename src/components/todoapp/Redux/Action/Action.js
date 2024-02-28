export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: text,
  });
  
  export const removeTodo = (text) => {
    
      console.log("action",text);
    return{
    type: 'REMOVE_TODO',
    payload: text,
    }
  }
  ;