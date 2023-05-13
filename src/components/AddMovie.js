import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function AddMovie({movies,setMovies}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newmovie,setNewmovie]= useState({
    id: Math.floor(Math.random() * 300),
    name:"",
    posterurl:"",
    description:"",
    rating:0,

  })

  const HundleAdd= ()=>{
    setMovies([...movies,newmovie])
  }

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Add your movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name Movie</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                onChange={(e)=>setNewmovie({...newmovie,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://www.exemple/poster.png/jpg/..."
                onChange={(e)=>setNewmovie({...newmovie,posterurl:e.target.value})}
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
              onChange={(e)=>setNewmovie({...newmovie,description:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="1-5"
                min={1}
                max={5}
                onChange={(e)=>setNewmovie({...newmovie,rating:e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{HundleAdd();handleClose()}}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;