import React from "react";

function Product(props){
    const {data} = props;
    return(
        <div className="product">
            <p>{data.title}</p>
            <p>$ {data.price}</p>
            <button>Detalle</button>
            <hr />
        </div>
    )
}
export default Product