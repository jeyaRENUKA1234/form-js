import React, { useState } from 'react'

const Form = () => {

    const[taskName,setTaskname]=useState("");
    const[description,setDescription]=useState("");
    const[completed,setCompleted]=useState();
    const[taskArray,setArray]=useState([]);
    const[errorShow,setError]=useState(false);
            //description......
      const Desvalue=(e)=>{
        console.log("description",e.target.value)
        setDescription(e.target.value)
    }
          //taskname.....
    const Taskname=(e)=>{
      console.log("Taskname",e.target.value)
      setTaskname(e.target.value)
  }
          //submit.....
    const handlesubmit=(e)=>{
        e.preventDefault();
         setError(true);
        if(taskName==="" || description==="")return;
        console.log(taskName,description,completed)
       pusharr();
       }
        //completed.....
    const Completed=(e)=>{
      console.log("completed",e.target.checked)
      setCompleted(e.target.checked ? "True":"false")
  }
         //array......
    const pusharr=()=>{
        setArray([...taskArray, {name:taskName,des:description,iscomplete:completed}]);
    }
   return (
    <div>
        <form onSubmit={handlesubmit}>
            <label >TaskName:</label>
            <input type="text" placeholder="Taskname"  onChange={Taskname}/><br/>
            {taskName === "" && errorShow &&<p>Enter the name</p>}
            <label >Description:</label>
            <input type="text" placeholder="description"  onChange={Desvalue}/><br/>
            {description === ""&& errorShow &&<p>Enter the Description</p>}
            <span>Completed</span>
            <input type="checkbox" onChange={Completed}/><br/>
            <input type="submit" style={{color:"black",background:"darkgreen"}}/>
        </form>
        <h2>Task list:
            {taskArray.map((item,index)=>(
              <li> key={index}
               <h3><b>TaskName:</b>{item.name}</h3>
               <h3><b> Description:</b>{item.des}</h3>
               <h3><b> isCompleted:</b>{item.iscomplete}</h3>
               </li>
               ))}
        </h2>
       </div>
  )
}

export default Form