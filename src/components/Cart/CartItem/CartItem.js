import React, { useState } from 'react'
import { connect } from "react-redux";
// import {
//   adjustItemQty,
//   removeFromCart,
// } from "../../../redux/Shopping/shopping-actions";
import './CartItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import * as actionTypes from '../../../redux/actions'

// import {useNavigate} from "react-router-dom"

function CartItem1({ item, adjustQty, removeFromCart }) {
  const navigation = useHistory()
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    if (e.target.value > 0) {
      setInput(e.target.value);
      adjustQty(item.id, e.target.value);
    }

  };
  const GoingHome = () => {
   // alert("ok")
    navigation.push('/')
  }
  return (
    <>
      <hr />
      {/* <button onClick={()=>{
        navigate("/")
      }}>Go to Home Button</button> */}
      {/* <button onClick={GoingHome}>Go to Home Button</button> */}
      <div className='itemContainer'>
        <div className='imgc'>
          <img src={item.image} alt={item.title} />
        </div>
        <div className='desc'>
          <div className='itemName'>
            <h3 >{item.title}</h3>
          </div>
          <div className='itemQuantity'>
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <div className='itemdesc'>
            <p style={{ color: '#222f3e', fontFamily: 'cursive', textAlign: 'justify' }} >{item.description}</p>
          </div>
          <div className='pc'>
            <Button variant="contained" color="secondary"
              onClick={() => removeFromCart(item.id)}
            >
              <DeleteIcon />Delete
            </Button>
            <h3 style={{ marginTop: '1%', marginLeft: '4%' }}>₹ {item.price}</h3></div>
        </div>

      </div>
      <div><button onClick={GoingHome}>Go to Home Button</button>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: { id: id } }),
    adjustQty: (id, qty) => dispatch({ type: actionTypes.UPDATE_QTY, payload: { id: id, qty: qty } })
  }
}

export default connect(null, mapDispatchToProps)(CartItem1);