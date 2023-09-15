import style from './RandomButton.module.css'

export default function RandomButton({onRandom}){

    return(
        <>
            <button className={style.random}onClick={()=>{onRandom()}}>
            </button>
        </>
    )
}