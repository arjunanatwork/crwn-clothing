import React from 'react';
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item

    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton  className='custom-button' onClick={()=> addItem(item)} inverted> Add to Cart </CustomButton>
        </div>
    )
}

const mapDispatchtoProps = dispatch => ({
    // prop that gets passed in to component
    addItem: item => dispatch(addItem(item)) // Calls the addItem function in action which returns a object with the payload and dispatches into the store
})
export default connect(null, mapDispatchtoProps)(CollectionItem);