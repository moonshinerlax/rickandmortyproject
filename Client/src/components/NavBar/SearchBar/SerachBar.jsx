import {useState} from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   
   const [id, setId] = useState("")
   const [isActive, setIsActive] = useState(false)

   const handleChange = (event) => {
      setId(event.target.value);
   }

      const handleSearch = () => {
         onSearch(id);
         setId("")
         setIsActive(true); 
    setTimeout(() => setIsActive(false), 7000); 
      }

   return(
        <div className={style.container}>
         <input id="inputSearch" className={`${style.input} ${isActive || id ? style.focus : ''}`} 
            value={id} onChange={handleChange} type="search" />
         <button className={style.search} onClick={handleSearch}></button>
      </div>
   )}