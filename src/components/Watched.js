import React,{useContext}from 'react'
import { GlobalContext } from '../context/Globalstate'
import {Moviecard} from './Moviecard'

export const Watched = () => {
    const { watched } = useContext(GlobalContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Watched Movies</h1>
                    <span className="count-pill">
                        {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
                    </span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map((movie,key) => (
                            <Moviecard key = {key} movie={movie} type="watched"/>
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your list, add some movies</h2>
                )}
            </div>
        </div>
    )
}
