import React, { useEffect, useState } from 'react'
import './Home.css'; 
import productService from '../service/product.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Home = () => {


  const[productList,setProductList]=useState([]);
  

    useEffect(()=>{
    init();
    },[]);

    const init=()=>
    {
      productService.getAllProduct().then((res)=>{
        console.log(res.data);
        setProductList(res.data);

      }).catch((error)=>{
        console.log(error);
      });
    }

const deleteProduct=(id)=>{
  productService.deleteProduct(id).then((res)=>{
    init();
    toast.success("Product deleted successfully", {
      className: "custom-toast",
    });

  }).catch((error)=>{
    toast.error("Error deleting a product", {
      className: "custom-toast",
    });
  })
}


  return (
    <>
    <div className="container mt-3">
    <img src="/footer.jpg" alt="Header" style={{ width: '100%' }} />
      <div className="row">
        <div className="col-md-12">
          <div className="card">
        
            <div className="card-header fs-3 text-center">
         
              <b>All products List </b>
            </div>

            <div className="card-body">
            <table class="table">
  <thead>
        <tr>
      <th scope="col">Product Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Status</th>
     

    
      <th scope="col">Action</th>
      </tr>
    
  </thead>
<tbody>
    {
      productList.map((p,num)=>(
  <tr>
    <td>{p.id}</td>
    <td>{p.productName}</td>
    <td>{p.description}</td>
    <td>{p.price}</td>
    <td>
    <img src={p.imageUrl} alt={p.productName} style={{ width: '100px', height: '100px' }} />

    </td>
    <td>{p.status}</td>
   
    <td>
      <Link to={'editProduct/'+p.id} className="btn btn-sm btn-success">Edit</Link>
      <button onClick={()=>deleteProduct(p.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
    </td>
  </tr>
      ))}
</tbody>
</table>
<footer className="footer">
        <img src="/dress.jpg" alt="Footer" style={{ width: '100%' ,height:'50%'}} />
      </footer>

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

export default Home