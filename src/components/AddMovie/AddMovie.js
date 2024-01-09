import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleRate = (e) => {
    setRate(Number(e.target.value));
  };
  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value);
  };

  const handleAdd = () => {
    const newMovie = { title, description, rate, posterUrl };
    add(newMovie);
    handleClose();
  };

  return (
    <div style={{ marginTop: 150, display: "flex", justifyContent: "center" }}>
      {" "}
      <Button variant="outline-danger" onClick={handleShow}>
        ADD NEW MOVIE
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={handleTitle}
          />
          <Form.Control
            type="text"
            placeholder="Enter Description"
            onChange={handleDescription}
          />
          <Form.Control
            type="number"
            placeholder="Enter Rate"
            onChange={handleRate}
            
          />
          <Form.Control
            type="text"
            placeholder="Enter PosterUrl"
            onChange={handlePosterUrl}
          />{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
