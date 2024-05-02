import axiosClient from "./axiosClient";

const products={
    getAll(param){
        const url ='/products';
        return axiosClient.get(url, {param});
    },

    get(id){
        const url =`/products/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url =`/products/${data.id}`;
        return axiosClient.post(url,data);
    },
    
    update(data){
        const url =`/products`;
        return axiosClient.patch(url,data);
    },
    remove(id){
        const url =`/products/${id}`;
        return axiosClient.delete(url);
    }

}

export default products;