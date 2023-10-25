import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddForm({ add }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    if (
      !title.trim() ||
      !description.trim() ||
      !imageUrl.trim() ||
      !price.trim()
    ) {
      alert("fill the gaps!");
      return;
    }

    const newProduct = { title, description, imageUrl, price };
    add(newProduct);
    navigate("/");
  };

  return (
    <Form className="w-50 m-auto" onSubmit={handleCreate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter your firstname"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter your lastname"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={(e) => setImageUrl(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter your phone number"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create New Table
      </Button>
    </Form>
  );
}

export default AddForm;
