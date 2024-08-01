import axios from "axios";
const API_URL = "http://localhost:8080";

class ProductService {
    saveProduct(product) {
        return axios.post(API_URL + "/saveProduct", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/products");
    }

    getProductById(id) {
        return axios.get(API_URL + "/" + id);
    }

    deleteProduct(id) {
        return axios.get(API_URL + "/delete/" + id);
    }

    editProduct(formData) {
        return axios.post(API_URL + "/editProduct/" + formData.get('id'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

const productService = new ProductService();
export default productService;
