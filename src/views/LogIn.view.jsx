// eslint-disable-next-line no-unused-vars
// import React, {useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Form from '../components/Forms/Form'
// import style from '../components/Forms/Form.module.css'


// const LogIn = () => {
//   const [access, setAccess] = useState(false)
//   const EMAIL = 'test@test.com'
//   const PASSWORD = 'pass123'
//   const navigate = useNavigate();

//   function login(userData) {
//    if (userData.password === PASSWORD && userData.email === EMAIL) {
//     console.log(userData)
//       setAccess(true);
//       navigate('/home');
//    }}

//    const logOut = () => {
//     setAccess(false);
//   }

//    useEffect(() => {
//     !access && navigate('/');
//  }, [access]);

//   return (
//     <div className={style.container}>
//         <Form login={login}/>
//     </div>
//   )
// }
// export default LogIn;