import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import Data from './Data'



const List = () => {
const [users  , setUsers] = useState(Data)

useEffect(()=>{
   axios.get(Data) 
   .then(res =>{
    console.log(res)
    setUsers(Data)
   })
   .catch(err =>{
    console.log(err)
   })
})
  return (
    <>
    <div className='container'>
  
            
                <h3>{users.length}  Birthday  Today</h3>
                
                {users.map((userdata)=>{
                    const {id,name,age,image} = userdata
                    return (
                        <>
                        <li key={id}>
                            <h4>{name}</h4>
                            <h5>Age {age}</h5>
                        </li> 
                        <div className='img1'>

                        <img src={image} alt='pic' />
                        </div>
                        
                        </>

                    )
                })}
        </div>
   
    </>
  )
}

export default List