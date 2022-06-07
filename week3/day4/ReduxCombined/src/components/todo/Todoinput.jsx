import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../../redux/todo/Action";
export const TodoInput = ()=>{
    const [text, setText] = useState();
    const dispatch = useDispatch();
    const handleAddTodo = ()=>{
        dispatch(
            addTodos({
                title:text
            })
        ).then(()=>{dispatch(getTodos())})
    }

    return (
        <div style={{textAlign:"center"}}>
            <input placeholder="enter your todo" onChange={(e)=>{setText(e.target.value)}}></input>
            <button onClick={handleAddTodo}>AddTodo</button>
        </div>
    )
}