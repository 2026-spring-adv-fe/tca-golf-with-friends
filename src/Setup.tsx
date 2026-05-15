import { useNavigate } from "react-router";

const Setup = () => {
  const nav = useNavigate();

  return (
    <>
      <h1>Setup</h1>
      <button
        className="btn btn-primary btn-outline"
        onClick={() => nav("/play")}
      >
        Start the Game
      </button>
    </>
  );
};

export default Setup;
