import React from "react";
import "./moviecomponent.css";

const MovieComponent = (props) => {
    const {Title,Year,Type,Poster} = props.movie;
    return (
        <div className="movieContainer">
            <img
                className="cover_img"
                src ={Poster}
                alt=""
            />
            <div className="movie_name">{Title}</div>
            <div className="info_col">
                <div className="info">Year: {Year}</div>
                <div className="info">Type: {Type}</div>
            </div>
        </div>
    );
};

export default MovieComponent;
