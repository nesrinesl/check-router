
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {moviesData} from '../../Data';

const MovieDetails = () => {
    const navigate =useNavigate();
    const {id}=useParams();
    const [movie,setMovie]=useState({});
    useEffect(() => {
      let foundMovie = moviesData.find((el)=>el.id===Number(id))
      setMovie(foundMovie) 
 }, [id])
    
    
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Card className="mc">
        <iframe title='trailer' width={300} height={350} variant="top" src={movie.trailer}> </iframe>   
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
         
                <Button variant="danger" onClick={()=>navigate(-1)} >Back</Button>

        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetails;
