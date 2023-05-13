import React from 'react'
import { Card } from 'react-bootstrap'
import Start from './Start';

function MovieCard({el}) {
  return  (
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
  );
}

export default MovieCard
