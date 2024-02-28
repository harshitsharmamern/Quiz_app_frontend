import React, { useState } from 'react';
import { addTodo, removeTodo } from './Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';


const Todo = () => {

    const todos = useSelector(state => state.todos);

    const [text, setText] = useState('');
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const dispatch = useDispatch();

    const handleSubmit = async() => {
        

        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ text }),
        // };

        try{
            console.log(text);
            dispatch(addTodo(text));  setText('')
            // const response = await fetch(`${baseUrl}/todopost`, requestOptions)
            // console.log(response);
            //     const res = await response.json();
            //     if(res.status){
            //         console.log('addsucess');
            //     }else{
            //         console.log('error');
            //     }
        }catch(err){
            console.log({msg:err});
        }
        
    };

    const handleRemoveTodo=(todo)=>{
        // console.log("click",todo);
        dispatch(removeTodo(todo))
    }

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit}>Save</button>


            <ul>
        { todos && todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
        </>
    );
};

export default Todo;
