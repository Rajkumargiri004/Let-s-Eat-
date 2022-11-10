import React from 'react'
import Menu from './component/Menu'
import Category from './component/Category'
import Data from './component/Data'
import { useState } from 'react'

const App = () => {
  const [menuItem , setMenuItem] = useState(Data)



  const filterItem = (breakfast)=>{
      if (breakfast==='Menu'){
    setMenuItem(Data)
    return
  }
    const newItems = Data.filter((curElm)=>curElm.category === breakfast)
    setMenuItem(newItems)
  }


  return (
    <>
    <main>
      <section className='menu section'>
        <div className='title'>
          <h3> Let's Eat</h3>
          
          <Category filterItem={filterItem}/>
          <Menu Data={menuItem}/>
        </div>
      </section>
    </main>
    </>
  )
}

export default App