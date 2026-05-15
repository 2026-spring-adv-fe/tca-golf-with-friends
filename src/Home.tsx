import { useNavigate } from "react-router";
import type { GeneralFacts } from "./GameResults";

type HomeProps = {
  generalFacts: GeneralFacts;
};

const Home: React.FC<HomeProps> = ({ generalFacts }) => {
  const nav = useNavigate();

  console.log(generalFacts);

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
