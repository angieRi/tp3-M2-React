import React, {useState,useEffect} from "react";
import Product from "./Product";
import {getAllProduct} from "../services/productService";

function Products() {
    const [loading, setLoding] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            const request = async () => {
                try {
                    const response = await getAllProduct()
                    setProducts(response.results)
                    setLoding(false)
                } catch (e) {
                    console.log(e)
                }
            }
            request()
        },
        []
    )

    if(loading){
        return(<div>Cargando...</div>)
    }else{
        const title = "Lista de Productos"
        return (
            <div className="products">
                <h1>{title}</h1>
                {products.map(dataProduct=><Product
                    data={dataProduct} />)}

            </div>
        )
    }

}
export default Products
