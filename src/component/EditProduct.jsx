import React, { useEffect, useState } from 'react';
import productService from '../service/product.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import './AddProduct.css'; 

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
    image: null,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    productService.getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        toast.error("Error fetching product details", {
          className: "custom-toast",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.name === "image" ? e.target.files[0] : e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('id', product.id); // Ensure ID is added
    formData.append('productName', product.productName);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('status', product.status);

    if (product.image) {
        formData.append('image', product.image); // Append file if exists
    }
    
    productService.editProduct(formData)
      .then((res) => {
        navigate("/home");
        toast.success("Product edited successfully", {
          className: "custom-toast",
        });
      })
      .catch((error) => {
        console.error("Error editing product:", error);
        toast.error("Error editing the product", {
          className: "custom-toast",
        });
      });
};


  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card custom-card">
              <div className="card-header fs-3 text-center">
               <b>Edit Product</b> 
              </div>
              <div className="card-body">
                <form onSubmit={ProductUpdate}>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Product Name</label>
                    <input 
                      type="text" 
                      name="productName" 
                      value={product.productName} 
                      className="form-control" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Description</label>
                    <input 
                      type="text" 
                      name="description" 
                      value={product.description} 
                      className="form-control" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Price</label>
                    <input 
                      type="text" 
                      name="price" 
                      value={product.price} 
                      className="form-control" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Enter Status</label>
                    <input 
                      type="text" 
                      name="status" 
                      value={product.status} 
                      className="form-control" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label-custom">Upload Image</label>
                    <input 
                      type="file" 
                      name="image" 
                      className="form-control" 
                      onChange={handleChange} 
                    />
                  </div>
                  <button className="btn btn-custom">Update</button>
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
  );
};

export default EditProduct;
