/* eslint-disable react-hooks/exhaustive-deps */
//common imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//module imports
import DetailEffect from './DetailEffect';
//style imports
import axios from 'axios'
import styles from './Detail.module.css'
import Loading from '../../utils/loading';


const Detail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()
  
  


  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data)
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);


    const textFormName = `Name... ${character?.name}`;
    const textFormStatus = `Status... ${character?.status}`;
    const textFormSpecies = `Species... ${character?.species}`;
    const textFormGender = `Gender... ${character?.gender}`;
    const textFormOrigin = `Origin... ${character.origin?.name}`;
    
  return (
    <div className={styles.container}>
    {character ? (<>
    <img className={styles.img} src={character?.image} alt="" />
    <div className={styles.textContainer}>
    <DetailEffect  text={textFormName} />
    <DetailEffect  text={textFormStatus} />
    <DetailEffect  text={textFormSpecies} />
    <DetailEffect  text={textFormGender} />
    <DetailEffect  text={textFormOrigin} />
    </div></>) : (
      <p><Loading/></p>
    )}
    </div>
  )
}

export default Detail