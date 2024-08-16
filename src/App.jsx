import React from 'react'
import './App.css'
import Paragraph from './components/StyleText'
import Button from './components/AlertButton'

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
