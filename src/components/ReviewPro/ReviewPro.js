import React from 'react';

const ReviewPro = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewStyle = {
        borderBottom: '1px solid lightgray',
        paddingBottom: '5px',
        marginBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewStyle}>
           <h5 className="product-name">{name}</h5>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button 
            className="addCart-btn"
            onClick={() => props.removeProduct(key)}
            >Remove</button> 
        </div>
    );
};

export default ReviewPro;