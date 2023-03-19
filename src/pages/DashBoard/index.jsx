import { useEffect, useState } from "react"
import { Container, Header } from "./style/style"
import { auth } from "../../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"

function DashBoard(){
    const [personUser, setPersonUser] = useState("")

    useEffect(() => {
        async function user(){
            const user = onAuthStateChanged(auth, (user) => {
                let email = user.email

                setPersonUser(email)
            })
            
        }
        user()
    }, [])
    return(
        <Container>
            <Header>
                 <h1>Seja bem vindo, {personUser}</h1>
            </Header>
        </Container>
    )  
}
export default DashBoard