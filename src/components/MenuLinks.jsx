import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router";
import "./MenuLinks.css";

function MenuLinks() {
  const {
    data: quizzes,
    ispending,
    error,
  } = useFetch("https://scented-amethyst-lathe.glitch.me/quizzes");

  return (
    <div>
      {ispending && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.map((item) => {
            return (
              <Link
                to={`/quiz/${item.title}`}
                key={item.title}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
