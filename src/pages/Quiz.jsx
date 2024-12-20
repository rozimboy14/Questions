import { useEffect, useState } from "react";

import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router";
import { Test } from "../components";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://scented-amethyst-lathe.glitch.me/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <section className="quiz">
      {isPending && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Test questions={quizzes[0]} />}
    </section>
  );
}

export default Quiz;
