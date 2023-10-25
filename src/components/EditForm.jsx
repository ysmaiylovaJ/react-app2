import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function EditForm({ saveProduct, oneProduct, getOneProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setImageUrl(oneProduct.imageUrl);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);

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
    saveProduct(params.id, newProduct);
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
          value={title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter your lastname"
          value={description}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          placeholder="Enter your email"
          value={imageUrl}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter your phone number"
          value={price}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save changes
      </Button>
    </Form>
  );
}

export default EditForm;
