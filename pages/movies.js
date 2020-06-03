import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function movies({ movies }) {
  /*const { movies } = props;*/
  return (
    <div>
      <Menu />
      <h1>Estamos en movies</h1>
      {movies.map((movie, index) => (
        <Link key={index} href="/movie/[movie]" as={`/movie/${movie.id}`}>
          <a>{movie.name}</a>
        </Link>
      ))}
    </div>
  );
}
movies.getInitialProps = async () => {
  const movies = [
    { id: "joker", name: "Danis" },
    { id: "batman", name: "Tiki" },
    { id: "queen", name: "Lolys" },
  ];
  /*  const res = await fetch("http://demo7631669.mockable.io/movies");
  const movies = await res.json();*/
  return { movies };
};
