import { useState, useEffect } from "react";


import { auth } from '../../services/firebaseConnection'
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";


function PrivateRoutes({children}){
    const [loading, setLoading] = useState(true)
    const [signed, setSigned ] = useState(false) //verifica se ta logado 


    useEffect(() => {
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {
                    //se possui alguém logado 
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                    }
                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false)
                    setSigned(true)
                }else{
                    //se não possui alguém logado
                    setLoading(false)
                    setSigned(false)
                }
            })
        }
        checkLogin()
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed){
        return(
            <Navigate to="/"/>
        )
    }



    return children
}
export default PrivateRoutes