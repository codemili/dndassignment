import React from 'react'

export default function DropdownMenu() {
   function onSelectOption(e){
         alert(e.target.value)
   }
   return (
     <>
       <select onChange={(e) => onSelectOption(e)} name="cars" id="cars">
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="mercedes">Mercedes</option>
         <option value="audi">Audi</option>
       </select>
     </>
   );
}
