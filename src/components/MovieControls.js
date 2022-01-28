import React,{useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'

export const MovieControls = ({movie,type, genre, ratings, overview}) => {
    const {removeMovieFromWatchlist, likeMovie, unlikeMovie,removeFromWatched} = useContext(GlobalContext)
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => {likeMovie(movie)}}>
                        <i className="far fa-thumbs-up"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => {removeMovieFromWatchlist(movie.id)}}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => {unlikeMovie(movie)}}>
                        <i className="far fa-thumbs-down"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => {likeMovie(movie)}}>
                        <i className="far fa-thumbs-up"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => {removeFromWatched(movie.id)}}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => {unlikeMovie(movie)}}>
                        <i className="far fa-thumbs-down"></i>
                    </button>
                </>
            )}
        </div>
    )
}
