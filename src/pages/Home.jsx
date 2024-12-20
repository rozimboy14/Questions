import { MenuLinks } from "../components";
import "./Home.css"
function Home() {
  return (
      <div className="container">
    <section className="home">
        <div className="home-content">
          <h1 className="home-title">Welcome to the</h1>
          <h1 className="home-title"> Frontent-Quiz</h1>
          <p className="home-subtitle">Pick a subjest to get started</p>
        </div>
        <div className="home-nav-list">
          <MenuLinks />
        </div>
    </section>
      </div>
  );
}

export default Home;
