import React, { useContext, useEffect } from "react";
import { Store } from "../Context/Store";
import { IEpisodeProps } from "../Context/interfaces";
import { toggleFavAction } from "../Context/actions";

const EpisodeList = React.lazy<any>(() => import("../components/EpisodeList"));

export default function FavePage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <div className="episode-layout">
          <EpisodeList {...props} />
        </div>
      </React.Suspense>
    </>
  );
}
