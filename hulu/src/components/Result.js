import React,{useState,useEffect} from 'react'
import './result.css'
import FlipMove from 'react-flip-move'
import VideoCard from './VideoCard'
import axios from '../api/axiosClient'
const Results = ({selectedOption})=>{
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        async function fetchData(){
        const request = await axios.get(selectedOption)
        setMovies(request.data.results)
        console.log(request.data.results)
        return request;
        }
       fetchData();
    }, [selectedOption])

  return (
    <div className='result'>
        <FlipMove>
              {movies?.map(movie => 
              <VideoCard 
              key={movie.id}
               movie={movie} 
              />   
                )}
              </FlipMove>
    </div>
  )
}

export default Results