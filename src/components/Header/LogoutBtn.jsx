// import React from 'react'
// import { useDispatch } from 'react-redux';
// import authService from '../../appwrite/auth';
// import { logout } from '../../store/authSlice';

// function LogoutBtn() {
//     const dispatch = useDispatch();
//     const logoutHandler = () => {
//         authService.logout().then(()=>{
//             dispatch(logout());
//         }).catch((e)=>console.log(e.message))
//     }
//   return (
//     <button
//     className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
//     onClick={()=>logoutHandler()}
//     >Logout</button>
//   )
// }

 

// export default LogoutBtn

import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    return (
        <button
            className="inline-block px-6 py-2 duration-200 bg-red-500 hover:bg-red-700 text-white rounded-full shadow-md transition-colors"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
