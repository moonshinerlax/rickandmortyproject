import SearchBar from './SearchBar/SerachBar'
import RandomButton from "./RandomButton/RandomButton";
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom'
import PATHROUTES from "../../helpers/PATHROUTES";
import logOutImg from '../../img/HD-wallpaper-rick-morty-rick-and-morty-rick-y-morty-removebg-preview.png'

export default function Nav({ onSearch, onRandom, logOut }) {
    
    return(
        <div className={style.NavBar}>
            <RandomButton onRandom={onRandom} />
            <Link className={style.NavButton} to={PATHROUTES.HOME}>home</Link>
            <Link className={style.NavButton} to={PATHROUTES.ABOUT}>about</Link>
            <Link className={style.NavButton} to={PATHROUTES.FAVORITES}>favorites</Link>
            <SearchBar 
                onSearch={onSearch}
                  />


  <a className={style.button} onClick={logOut}>
  <img src={logOutImg} />
<div className={style.logout}>LOGOUT</div>
</a>

                  {/* <button onClick={logOut}>Log Out</button> */}
        </div>
        );
    }