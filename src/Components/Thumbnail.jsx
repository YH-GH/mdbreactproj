import React from 'react';
import './thumbnail.css';
import {getImgUrlPrefix} from '../api/tmdbApi'

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <div className="thumbnail">
                <img className="moviePoster" src={`${getImgUrlPrefix()}${this.props.posterPath}`} alt={this.props.title}/>
                <div className="movieYear onTopOfPoster">
                    {this.props.year}
                </div>
                <div className="movieVoting onTopOfPoster">
                    <div className="votingImg"></div>
                    <div className="voting">
                        {this.props.voting}
                    </div>
                </div>
                <div className="movieTitle onTopOfPoster">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default Thumbnail;