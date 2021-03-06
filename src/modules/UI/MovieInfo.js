import React from 'react';
import { Link } from 'react-router-dom';
const movieInfo = ({ img, title, id }) => (
  <div id="mv-info" style={{ zIndex: 2 }}>
    <Link id="mv-ply-btn" to={`/player/?id=${id}`}>
      <div
        id="mv-ply"
        className="thumb mvi-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${img})`,
          cursor: 'pointer'
        }}
        alt={title}
      />
    </Link>
    <div className="btn-watch-area">
      <div className="bwa-content">
        <span className="bwac-btn">
          <i className="fa fa-play" />
        </span>
      </div>
    </div>
    <div className="block-trailer">
      <Link to="#!">
        <div className="trailerz">
          <i className="fa fa-video-camera" />
          <span className="trailers">Trailer</span>
        </div>
      </Link>
    </div>
  </div>
);
export default movieInfo;
