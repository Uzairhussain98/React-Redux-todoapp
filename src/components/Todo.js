import React, { useState } from 'react'
import './Todo.css'
import {useDispatch,useSelector } from 'react-redux'
import {plus, minus, clearall} from '../actions/Index.js'


const Todo = () => {

  
  

    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list)
    const Dispatch = useDispatch();

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>📝 Add Your To-do Tasks Here</figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="✍️" 
          onKeyPress={(e) => {
            if (e.key === "Enter") {
                setInputData(e.target.value);
                inputData === '' ? alert("enter something"):
                Dispatch(plus(inputData));
                setInputData('')
             
            }
        }}


          value={inputData}
          onChange={(event)=> setInputData(event.target.value)}
          />
          { inputData === '' ? 

          <i className="fa fa-plus add-btn" 
          onClick={()=> alert("Enter Todo Tasks")}></i>
                                        :
          <i className="fa fa-plus add-btn" 
          onClick={()=> Dispatch(plus(inputData))&& setInputData('')}></i>

          }
        </div>
            <div className="showItems">

              {
                list.map((elem)=>{
                 
                  return(
                  <div className="eachItem" key={elem.id}>
                  <h2>{elem.data}</h2>
                <i className="fa fa-trash add-btn"
                title="remove item" 
                onClick={()=> Dispatch(minus(elem.id))}></i>
              
  
                </div>
                  )
                })
              }
          
              



            </div>
              <button onClick={()=> Dispatch(clearall())}> Clear All  </button>

      </div>
     </div>
  )
}

export default Todo 