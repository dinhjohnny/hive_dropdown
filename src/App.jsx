import Dropdown from './Dropdown';
import './App.css'

function App() {
  

  const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Steve Jobs", "Warren Buffet","Bill Gates","Jeff Bezos"]
  const ages = ["None", "Twenty", "Twenty one", "Twenty one and a half"];

  return (
    <>
        <div className="body">
          <Dropdown label={"Tag"} options={names} multi_select={true}></Dropdown>
          <Dropdown label={"Age"} options={ages} multi_select={false}></Dropdown>
        </div>
    </>
  )
}

export default App
