import React, { useContext, useEffect } from "react";
import { Store } from "../Context/Store";
import { IAction, IEpisode, IEpisodeProps } from "../Context/interfaces";
import { fetchDataAction, toggleFavAction } from "../Context/actions";
// typescript wants us to have an interface to define all the types for the data we're mapping over
const EpisodeList = React.lazy<any>(() => import("../components/EpisodeList"));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourties,
  };

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
}
