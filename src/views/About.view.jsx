import AboutEffect from "../components/AboutEffects/AboutEffect"
import style from '../components/AboutEffects/AboutStyle.module.css'

const About = () => {
  return (
    <div className={style.container}>
        <div className={style.img}></div>
      <div className={style.textContainer}>
        <AboutEffect text="Hello my name is Ivan Nava. This is my integrator project base on the API Rick and Morty. This project contains the knowldge that i have gain studying in Henry School. I have always being intersted on becoming a app developer and this is now a step foward to that goal..." />
      </div>
    </div>
  )
}

export default About