"use client" ; 


import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Modal, Typography , MenuItem} from '@mui/material';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { UploadFirebase } from '../utils/UploadFirebase';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 550,
  maxHeight: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color: '#000',
  borderRadius: '20px',
  padding: '40px 30px 20px',
  textAlign: 'center',
};

function AjoutProduct({ getProducts }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [scategorieID, setScategorieID] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (url) => {
    setImage(url);
    const product = {
      name: name,
      image: url,
      price: price,
      description: description,
      scategorieID: scategorieID,
    };
    try {
      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data) {
        console.log('Successfully inserted!');
        handleClose();
        setFile('');
        setName('');
        setImage('');
        setPrice('');
        setDescription('');
        setScategorieID('');
        getProducts(); // Récupérer à nouveau les produits après l'ajout
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (!file[0]?.file) {
      alert('Please upload an image first!');
    } else {
      resultHandleUpload(file[0].file);
    }
  };

  const resultHandleUpload = async (file) => {
    try {
      const url = await UploadFirebase(file);
      console.log(url);
      handleSave(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button type="button" className="btn btn-primary" onClick={handleOpen}>
        ADD
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <hr />

          <div className="mb-4">
            <TextField variant="outlined" label="Name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <TextField variant="outlined" label="Price" onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="mb-4">
            <TextField
              variant="outlined"
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              variant="outlined"
              select
              label="Category"
              value={scategorieID}
              onChange={(e) => setScategorieID(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="mb-4">
            <h6>Select image</h6>
            <center>
              <div style={{ width: 200, height: 250 }}>
                <FilePond
                  files={file}
                  allowMultiple={false}
                  onupdatefiles={setFile}
                  labelIdle='<span class="filepond--label-action">Browse One</span>'
                />
              </div>
            </center>
          </div>
          <hr />
          <div className="mb-3">
            <Button type="button" className="btn btn-danger" onClick={(event) => handleUpload(event)}>
              Save
            </Button>
            <Button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AjoutProduct;

