"use client" 
import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = ({ product }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const handleUpdate = async () => {
    try {
      const updatedProduct = {
        title: title,
        price: price,
        description: description
      };

      await axios.put(`http://localhost:3001/api/products/${product._id}`, updatedProduct);
      console.log('Product updated:', product._id, updatedProduct);
      // Add any additional logic you need after the product is updated
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateProduct;
