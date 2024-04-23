import { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css'

function App() {
  

  const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "h1", "h2","h3","h4","h5", ]
  const age = ["None", "Twenty", "Twenty one", "Twenty one and a half"];

  return (
    <>
        <div className="body">
          <Dropdown label={"Tag"} options={names} multi={true}></Dropdown>
          <Dropdown label={"Age"} options={age} multi={false}></Dropdown>
        </div>
    </>
  )
}

export default App
