
import React, { useState } from 'react';
import './AddProduct.css'; 
import productService from '../service/product.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
    image: null,
  });

  const handleChange = (e) => {
    const value = e.target.name === "image" ? e.target.files[0] : e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    productService.saveProduct(formData)
      .then((res) => {
        toast.success("Product added successfully", {
          className: "custom-toast",
        });
      })
      .catch((error) => {
        toast.error("Error adding a product", {
          className: "custom-toast",
        });
      });
  }

  return (
    <>
      <Navbar showHome={true} /> 
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card custom-card">
              <div className="card-header fs-3 text-center">
                <b>Add Product</b> 
              </div>
              <div className="card-body">
                <form onSubmit={ProductRegister}>
                  <div className="mb-2">
                    <label className="form-label-custom">Enter Product Name</label>
                    <input type="text" name="productName" className="form-control" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Price</label>
                    <input type="text" name="price" className="form-control" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Status</label>
                    <input type="text" name="status" className="form-control" onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Upload Image</label>
                    <input type="file" name="image" className="form-control" onChange={handleChange} />
                  </div>
                  <button className="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default AddProduct;
