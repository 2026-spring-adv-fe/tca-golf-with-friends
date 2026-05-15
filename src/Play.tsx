import { useNavigate } from "react-router";

const Play = () => {
  const nav = useNavigate();

  return (
    <>
      <h1>Play</h1>
      <button className="btn btn-primary btn-outline" onClick={() => nav(-2)}>
        Game Over
      </button>
    </>
  );
};

export default Play;
