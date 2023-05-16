import React from 'react'
import { Card } from 'react-bootstrap'
import Start from './Start';
import {Link} from 'react-router-dom';

function MovieCard({el}) {
  return  (
    <Link to={`/smovies/${el.id}`}>
      <Card className='cards' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterurl} alt="Card image" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.description}
          </Card.Text>
          <Card.Text><Start rate={el.rating} /></Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard
