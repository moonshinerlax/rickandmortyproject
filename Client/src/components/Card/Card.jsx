/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import style from './card.module.css'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';


export default function Card(props) {
      const myFavorites = useSelector((state) => state.myFavorites)
      const {id, name, status, species, gender, origin, image, onClose} = props
      const [isFav, setIsFav] = useState(false);
      const dispatch = useDispatch();
      const {pathname} = useLocation()

      useEffect(() => {
            myFavorites.forEach((fav) => {
               if (Number(fav.id) === Number(props.id)) {
                  setIsFav(true);
               }
            });
         }, [myFavorites]);

      const handleFavorite = () => {
            if (isFav){
                   setIsFav(false);
                  dispatch(removeFav(id))
            } 
            if (!isFav){
                   setIsFav(true);
                  dispatch(addFav(props))          
            }}
      console.log(isFav)
   return (
     
         <div className={style.container}>
            {
              isFav ? (
                  <button className={style.Fav} onClick={handleFavorite}>👽</button>
             ) : (
                  <button className={style.unFav} onClick={handleFavorite}>🖤</button>
                 )
            } 

            {pathname !== "/favorites" && (
               <button className={style.btn} onClick={onClose}>X</button>
            )}        
         <h2 className={style.status}>{status}</h2>
         <h2 className={style.status}>{species}</h2>
         <h2 className={style.status}>{gender}</h2>
         <h2 className={style.origin}>{origin}</h2>
         <img src={image} alt='' />
         <Link className={style.cardName} to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         </div>
          
   )
}