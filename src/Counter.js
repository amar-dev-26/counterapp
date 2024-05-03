import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


export default function Counter() {

    const [count,setCount]=useState(0);

    const decriClick=()=>{
        if(count!=0){
            setCount(count-1)
        }
    }


  return (  


         <div className="app d-flex" style={{minHeight:"100vh",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#f5f5f5"}}>

                    <div className='parent text-center ' style={{height:"180px",width:"300px",boxShadow:"10px",borderRadius:"10px",backgroundColor:"white",fontSize:"16px"}}>
                    <h1 className='mt-3'>Counter app</h1>
                  
                 
               
                       <div className='buttonContainer g-3 p-3 ' style={{display:"flex",alignItems:"center",justifyContent:'space-around'

                       }}>  


                           <i onClick={decriClick} class="fa-solid fa-angle-up " style={{fontSize:"40px"}}></i>
                          
                           <div><h1>{count}</h1></div>
                           <i  onClick={()=>setCount(count+1)} class="fa-solid fa-angle-down" style={{fontSize:"40px"}}></i>

                          
                
                       </div>
                       </div>
 
            </div>
  )
}
