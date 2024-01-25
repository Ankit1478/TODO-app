import { useState } from "react";

export function CreatTodo(){

    const[title,settitle] = useState("");
    const[description,setdescription] =useState("");
    return <div>

        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value =e.target.value;
            settitle(e.target.value);
        }}></input> 
        <br></br>
        <br></br>


        <input style={{
            padding:10,
            margin:10
        }}type="text" placeholder="description" onChange={function(e){
            const value =e.target.value;
            setdescription(e.target.value);
        }}></input>
        <br></br>
        <br></br>


        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
             fetch("http://localhost:3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                  "content-type": "application/json"
                }
             })
              .then(async function(res){
               const json = await res.json();
               alert("Todo Added ")
                })
        }}>Add a todo</button>
    </div>
}