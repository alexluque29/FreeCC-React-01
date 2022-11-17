import "./styles/App.css";
import { Testimonio } from "./components/Testimonio";

function App() {

    return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="title">
            <h1>Réplica Testimonios freeCodeCamp</h1>
          </div>
          <Testimonio
            name="Emma Bostian"
            img="01"
            country="Suecia"
            role="Ingeniera de software"
            enter="Spotify"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolorum reiciendis iusto asperiores laboriosam eum nam deserunt quae
            sint, ipsum velit quibusdam explicabo obcaecati quis distinctio
            consequatur tenetur! Repellat, beatae.`}
          />
          <Testimonio
            name="Toby Nelson"
            img="03"
            country="San Francisco"
            role="Senior Backend"
            enter="Amazon"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolorum reiciendis iusto asperiores laboriosam eum nam deserunt quae
            sint, ipsum velit quibusdam explicabo obcaecati quis distinctio
            consequatur tenetur! Repellat, beatae."
          />
          <Testimonio
            name="Sarah Chima"
            img="02"
            country="Argentina"
            role="Analista"
            enter="Chatdesk"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            dolorum reiciendis iusto asperiores laboriosam eum nam deserunt quae
            sint, ipsum velit quibusdam explicabo obcaecati quis distinctio
            consequatur tenetur! Repellat, beatae."
          />
        </div>
      </div>
    </>
  );
}

export default App;
