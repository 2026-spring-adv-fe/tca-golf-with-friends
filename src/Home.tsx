import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button
        className="btn btn-primary btn-outline"
        onClick={() => nav("/setup")}
      >
        Setup a game
      </button>
    </>
  );
};

export default Home;
