import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "./style/style";

import {auth} from '../../services/firebaseConnection'
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const navegate = useNavigate()

  async function handleSignUp(e) {
    e.preventDefault();

    if(name !== '' && email !== '' && password !== ''){

      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navegate("/dashboard", {replace: true})
      })
      .catch((error) => {
        console.log("ERROR" + error)
      })
      
    }else{
      alert("ERROR")
    }
  }

  return (
    <Container>
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSignUp}>
      <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit" className="btn">
          To Enter
        </button>
      </form>
      <Link to="/" className="link-to-register">
      Already have an account? Sign in
      </Link>
    </Container>
  );
}
export default SignUp;
