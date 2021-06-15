import { IAction, IEpisode, IState } from "../Context/interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty===&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes, // this is the data we want back from the json data - it is in _embedded then episodes
  });
};

// const toggleFavAction = (episode: IEpisode): IAction =>
// const episodeInFav;
//   dispatch({
//     type: "ADD_FAV",
//     payload: episode,
//   });

// the above function is automatically returning dispatch
// if we add the const episodeInFav, the function wont be able to read it
// we need to change the funtion so its not an automatically returned function
export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favourites.includes(episode); // return true or false
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (episodeInFav) {
    // take episode out of favourites array and give the new array to our payload
    const favWithoutEpisode = state.favourites.filter(
      (fav: any) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }
  return dispatch(dispatchObj);
};
