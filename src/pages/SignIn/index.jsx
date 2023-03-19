import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "./style/style";

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navegate = useNavigate()

  async function handleSignIn(e) {
    e.preventDefault();

    if(email !== '' && password !== ''){

      await signInWithEmailAndPassword(auth, email, password)
      .then((data) => { 
        localStorage.setItem("token", email)
        navegate("/dashboard", {replace: true})
        console.log(data)
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
      <h1 className="title">Sign in</h1>
      <form onSubmit={handleSignIn}>
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
        <button type="submit" className="btn">To Enter</button>
      </form>
      <Link to="/register" className="link-to-register">Don't have an account yet? Register</Link>
    </Container>
  );
}
export default SignIn;
