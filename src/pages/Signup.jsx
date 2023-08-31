import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state qui stock l'error et me permet de facilement l'afficher en dessous de mon form lors d'un problème
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post("http://localhost:4000/user/signup", {
        username: username,
        password: password,
        email: email,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  return (
    <div>
      <div>Signup</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          // deuxième syntaxe possible
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(event) => {
            const value = event.target.value;
            setPassword(value);
          }}
        />
        <button>Submit</button>
      </form>
      {/* Si errorMessage existe, alors j'affiche cette div ! */}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};

export default Signup;
