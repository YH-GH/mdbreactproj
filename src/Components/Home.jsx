import React from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
        
        this.tmdbBaseURL = "https://api.themoviedb.org/3/";
        this.tmdbApiKeyParam = "api_key=b4a8f7cf5b241fd00aa7ac9be3183ce1";
        this.minDate = "2020-08-30";
    }

    async componentDidMount() {
        //fetch latest movies
        const result = await axios.get(`${this.tmdbBaseURL}discover/movie?${this.tmdbApiKeyParam}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${this.minDate}&primary_release_date.lte=2020-11-09&year=2020`);
        console.log(result.data.results);
        this.setState ({ movies: result.data.results});
      }
    
    render() {
        const moviesDisplay = this.state.movies.map(movie => 
            <Thumbnail
                title={movie.title.length > 15 ? `${movie.title.substring(0,15)}...` : movie.title}
                voting={movie.vote_average}
                year={movie.release_date.substring(0,4)}
                posterPath={movie.poster_path}
            />
            );

        return (
            <div>
                {moviesDisplay}
            </div>
        );
    }
}

export default Home;