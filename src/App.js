import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  Action: [
    {
      name: "The Suicide Squad",
      desc:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      rating: "IMDb: 7.3"
    },
    {
      name: "Spider Man",
      desc:
        "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. ",
      rating: "IMDb: 7.9 "
    }
  ],
  Romance: [
    {
      name: "To All the Boys",
      desc:
        "Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans -- with and without Peter.",
      rating: "IMDb: 6.5"
    },
    {
      name: "The Briken Hearts Gallery",
      desc:
        "Lucy is devastated after her boyfriend breaks up with her. But when she meets Nick, a hotelier, she decides to create a gallery where people can leave memorabilia from their past relationships.",
      rating: "IMDb: 6.9"
    }
  ],
  Thriller: [
    {
      name: "Tom and Jerry",
      desc:
        "The iconic animated duo is coming at you live. When Jerry Mouse takes refugee in the Royal Gate hotel Tom Cat teams up with Kayla an employee to drive him away.",
      rating: "IMDb: 7.1"
    },
    {
      name: "Ludo",
      desc:
        "Four seemingly different stories intertwine in a game of fate and chance that includes a scandalous sex tape, a suitcase full of money and unsettled scores",
      rating: "IMDb: 7.6"
    }
  ]
};
export default function App() {
  const [genre, setGenre] = useState("Action");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movie Recommendations</h1>
      <div>
        {Object.keys(movies).map((genre) => (
          <button className="btn" onClick={() => clickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {movies[genre].map((movie) => (
            <li key={movie} className="section">
              {" "}
              <div className="movie">{movie.name}</div>
              <div className="desc">{movie.desc}</div>
              <div className="rating">{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
