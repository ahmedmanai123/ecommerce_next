"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AjoutProduct from './ajoutProduct';

const AffTableProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products', { cache: "no-store" });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (_id) => {
    if (window.confirm("Supprimer le produit ?")) {
      try {
        await axios.delete(`http://localhost:3001/api/products/${_id}`);
        const newProducts = products.filter((item) => item._id !== _id);
        setProducts(newProducts);
        console.log(_id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const columns = [
    {
      label: "Title",
      name: "title"
    },
    {
      label: "Price",
      name: "price"
    },
    {
      label: "Description",
      name: "description"
    },
    {
      name: "images",
      label: "Images",
      options: {
        customBodyRender: (rowdata) => (
          <img
            style={{ height: 40, width: 60, borderRadius: '10%' }}
            src={`${rowdata}`}
            alt=""
          />
        )
      }
    },
    {
      name: "_id",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div>
            <span
              onClick={(e) => handleDelete(value)}
              style={{ cursor: 'pointer' }}
            >
              <DeleteForeverRoundedIcon color='error' />
            </span>
          </div>
        )
      }
    },
   
  ];

  return (
    <>
      <AjoutProduct />
      {products && products.length > 0 ? (
        <MUIDataTable
          title="Products List"
          data={products}
          columns={columns}
        />
      ) : null}
    </>
  );
};

export default AffTableProducts;
