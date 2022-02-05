import React from "react";
import { withRouter } from "react-router-dom";
import './menu-item.syles.scss';


const MenuItem = ( {judul, gambar, ukuranGambar, history, linkUrl, match} ) => (
    <div 
        className={`${ukuranGambar} menu-item`}
        onClick={ () => history.push(`${match.url}${linkUrl}`) }
        >

        <div    
            className="background-image"
            style= {{ backgroundImage:`url(${gambar})` }}                 
            />

            <div className='content'>
                <h1 className='title'>{judul.toUpperCase()}</h1>
                <span className='subtitle'>SIKAT BOS!</span>
            </div>

    </div>
);

export default withRouter(MenuItem);