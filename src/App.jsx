import React from 'react'
import './App.css'
import Paragraph from './components/paragraph/Paragraph'
import Button from './components/button/button'

function App(){
  return(
    <>
      <Paragraph p='Não pare até se orgulhar de você!' 
      colorText='pink'
      />
      <Button label='Baixar CV'/>
    </>
  )
}

export default App
