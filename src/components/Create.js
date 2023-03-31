import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";

const Create = () => {

    const {createStudent} = useAppContext(AppContext)

    const [name,setName] = useState('');
    const [age, setAge] =useState('');

    const handleSubmit =(e)=>{
        e.preventDefault()
        createStudent({id: Date.now(), name, age})
        setName('');
        setAge('');
    }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
         type="text" 
         className="form-control"
         placeholder="name" 
         value={name}
         onChange={(e)=> setName(e.target.value)}
         />
        <label>Name</label>
      </div>
      <div className="form-floating">
        <input 
        type="number" 
        className="form-control" 
        placeholder="age" 
        value={age} 
        onChange={(e)=>setAge(e.target.value)}
        />
        <label>Age</label>
      </div>
      <div className="d-grid gap-2 mt-2">
        <button className="btn btn-success" type="submit">
            New <i className="fa-regular fa-square-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default Create;
