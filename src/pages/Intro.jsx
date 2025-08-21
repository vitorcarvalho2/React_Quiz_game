import { useState } from "react";
import Quiz from "./Quiz";
import Header from "../components/Header";

export default function Intro() {
  const [topic, setTopic] = useState(0);

  const handleTopic = (topic) => {
    setTopic(topic);
  };

  return (
    <>
      {topic !== 0 ? (
        <Quiz topic={topic} />
      ) : (
        <>
          <Header />
          <div className="intro">
            <h3>Vamos Começar?</h3>
            <p>Escolha sobre qual tema você quer testar seus conhecimentos</p>
            <div id="buttons">
              <button onClick={() => handleTopic("games")}>Jogos</button>
              <button onClick={() => handleTopic("movies")}>Filmes</button>
              <button onClick={() => handleTopic("music")}>Músicas</button>
              <button onClick={() => handleTopic("anime")}>Animes</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
