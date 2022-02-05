import React from "react";
import './menu-item.syles.scss';


const MenuItem = ( {judul, gambar, ukuranGambar} ) => (
    <div className={`${ukuranGambar} menu-item`}>
        <div    
            className="background-image"
            style= {{ backgroundImage:`url(${gambar})` }} />
            <div className='content'>
                <h1 className='title'>{judul.toUpperCase()}</h1>
                <span className='subtitle'>SIKAT BOS!</span>
            </div>
    </div>
);

export default MenuItem;