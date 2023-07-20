import React from 'react'

function MovieDisplay(props) {
    const loaded = () => {
        return (
            <div>
                <h1>{props.movie.Title}</h1>
                <h1>{props.movie.Year}</h1>
                <h1>Rated: {props.movie.Rated}</h1>
                <h2>Awards: {props.movie.Awards}</h2>
                <hr/>
                <img src={props.movie.Poster}/>
                <h3>{props.movie.Actors}</h3>
                <hr/>
                <h2>Ratings</h2>
                <h3>{props.movie.Ratings[0].Source} | {props.movie.Ratings[0].Value}</h3>
                <h3>{props.movie.Ratings[1].Source} | {props.movie.Ratings[1].Value}</h3>
                <h3>{props.movie.Ratings[2].Source} | {props.movie.Ratings[2].Value}</h3>
                <hr/>
                <h1>{props.movie.Plot}</h1>
                
            </div>
        )
    }
    //function to return loading JSX
    const loading = () => {
    return <h1>No Movie to Display</h1>;
    };

    //Ternary operator will determine which functions JSX we will return
    return props.movie ? loaded() : loading();
    
}

export default MovieDisplay