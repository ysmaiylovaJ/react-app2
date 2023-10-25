import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
  const { getProducts, products, deleteProduct } = props;
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container d-flex">
      {products.map((item) => (
        <Card key={item.id}>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>

              <tr>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.imageUrl}</td>
                <td>{item.price}</td>
              </tr>
            </thead>
          </table>

          <Button className="btn" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
          <Button className="btn2" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
