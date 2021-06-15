import React from "react";
import { IAction, IEpisode } from "../Context/interfaces";

export default function EpisodeList(props: any): JSX.Element[] {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => (
    <section key={episode.id} className="episode-box">
      {episode.image !== null ? (
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
      ) : (
        ""
      )}

      <div>{episode.name}</div>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button
          type="button"
          onClick={() => toggleFavAction(state, dispatch, episode)}
        >
          {/* {favourites !== null &&
          favourites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Unfav"
            : "Fav"} */}
          <div>
            {favourites
              ? favourites.find((fav: IEpisode) => fav.id === episode.id)
                ? "Unfav"
                : "Fav"
              : "Some other placeholder or empty string"}
          </div>
        </button>
      </section>
    </section>
  ));
}
