import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo , deleteTodo} from '../actions/index'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './Todo.css';

const Todo = ()=>{
    const[Inputdata , setInputdata] = useState('');
    const List = useSelector((state)=> state.todoReducers.list)
    const dispatch = useDispatch();
    return (
        <>
        <h3><strong>Add Your Work ToDo</strong></h3>
        <br/>
        <div className="additems">
            <input className="form-control" type="text" placeholder="Add items...."
            value={Inputdata} onChange={(e)=> setInputdata(e.target.value)}/>
            <i className="fa  fa-plus" onClick={()=> dispatch(addTodo(Inputdata) , setInputdata(''))}></i>
        </div>
        <div className="listitems">
           {
               List.map((items) =>{
                   return(
                    <div className="eachitems" key={items.id}>
                        <h4>{items.data}</h4>
                        <i className="fa fa-2x fa-times" onClick={()=> dispatch(deleteTodo(items.id))}></i>
                    </div>
                   )
               })
           }
        </div>
        </>
    )
}

export default Todo;