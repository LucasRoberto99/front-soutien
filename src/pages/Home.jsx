import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to={"/signup"}>to signup</Link>
    </div>
  );
};

export default Home;
