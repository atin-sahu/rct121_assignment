import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { TodoInput } from "./Todoinput"
import { TodoList } from "./Todolist"
import { getTodos } from "../../redux/todo/Action";

export const Todo = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTodos())
    },[])

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Todo App</h1>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
        </div>
    )
}