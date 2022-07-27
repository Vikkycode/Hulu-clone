import React,{forwardRef,useState} from 'react'
import './videoCard.css'
import TextTruncate from 'react-text-truncate'
import {BsHandThumbsUpFill} from 'react-icons/bs'
import baseurl from '../api/apiConfig'
const VideoCard =forwardRef(({movie},ref)=>{

    
    
  return (
    <div ref={ref} className="videoCard">
        <img 
        src= {`${baseurl.imgUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="img"
        // onClick ={() => handleClick(movie)}        
        />
         {/* {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>} */}
        <TextTruncate 
        line={2}
        element = "p"
        truncateText="..."
        text={movie.overview}
        // textTruncateChild={<a href="#">Read on</a>}
        />
        
        <h2>{movie.title || movie.original_title}</h2>
        <p className="videoCard_stats">
        {movie.media_type && `${movie.media_type}`}
        {movie.release_date}
        <BsHandThumbsUpFill />  {movie.vote_count}
        </p>
        </div>
  )
})

export default VideoCard;