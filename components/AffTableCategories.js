"use client" ; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import AjoutCategorie from './ajoutCategorie';
import UpdateCategory from './updateCategory';

const AffTableCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/categories',{cache:"no-store"});
      setCategories(response.data);
    
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleDelete = async (_id) => {
    if (window.confirm("Supprimer la catégorie ?")) {
      try {
        await axios.delete(`http://localhost:3001/api/categories/${_id}`);
        const newCategories = categories.filter((item) => item._ !== _id);
        setCategories(newCategories);
        console.log(_id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const columns = [
    {
      label: "Name",
      name: "name"
    },
    {
      label: "Image",
      name: "images",
      options: {
        customBodyRender: (rowdata) => (
          <img
            style={{ height: 50, width: 60, borderRadius: '10%' }}
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
            <UpdateCategory categories={categories[tableMeta.rowIndex]} />
            <span
              onClick={(e) => handleDelete(value)}
              style={{ cursor: 'pointer' }}
            >
              <DeleteForeverRoundedIcon color='error' />
            </span>
          </div>
        )
      }
    }
  ];

  return (
    <>
      <AjoutCategorie />
      {categories && categories.length > 0 ? (
        <MUIDataTable
          title="Categories List"
          data={categories}
          columns={columns}
        />
      ) : null}
    </>
  );
};

export default AffTableCategories;
