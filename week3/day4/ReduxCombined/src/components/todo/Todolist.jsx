import { useState } from "react"
import { useSelector } from "react-redux"


export const TodoList = ()=>{
    const todos = useSelector((state)=>(state.todoReducer.todos))
    const loading = useSelector((state)=>(state.todoReducer.loading));
    console.log("todos",todos);
    return (
        <div>
            <h1 style={{textAlign:"center"}}> Todo list</h1>
            <div style={{textAlign:"center"}}>
                {loading && <h3>Loading......</h3>}
                <table>
                    <thead>
                        <tr>
                            <th style={{border:"1px solid black", padding:"10px"}}>id</th>
                            <th style={{border:"1px solid black"}}>tittle</th>
                            <th style={{border:"1px solid black"}}>status</th>
                            <th style={{border:"1px solid black"}}>delete</th>
                        </tr>
                    </thead>
                    <tbody>                                   
                        {todos.map((item)=>(
                            <tr  key = {item.id}>
                                <td >
                                    {item.id}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.status ? "done" : "no"}
                                </td>
                                <td>
                                    <button>delete</button>
                                </td>
                            </tr>
                        ))}                                              
                    </tbody>
                </table>
            </div>
        </div>
    )
}