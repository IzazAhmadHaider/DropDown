import React ,{useState} from 'react'

function DropDown() {
const [isDropDownActive, setIsDropDownActive ]=useState(false);

const Dropdowmitem=["item1","item2","item3"]
   

function ToggleDropDown(){
  setIsDropDownActive(!isDropDownActive);
}

  return (
    <div>

      <p onClick={ToggleDropDown} className='border border-blue-300 border-solid p-2 font-extrabold w-fit'>DropDown Header</p>

      {isDropDownActive && (
        Dropdowmitem.map((item,index)=>(
        <div key={index}>{item}</div>
      )))}
      
    </div>
  )
}

export default DropDown
