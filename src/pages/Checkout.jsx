import React ,{useContext,useState} from 'react'; 
import {Link} from 'react-router-dom' 
import AppContext from '../context/AppContext'
import '../components/styles/Checkout.css'
const Checkout = () => {  
   
    const{state,removeFromCart} = useContext(AppContext); 
    const {cart} = state;  
    const handleRemove = product => () => {
        removeFromCart(product)
    }; 

    const handleSumTotal = (cart) =>{
        const reducer = (accumulator,currentValue) => accumulator + currentValue.price; 
        const sum = cart.reduce(reducer,0); 
        return sum;
    }
    return (
        <div className="Checkout"  >
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Mis Pedidos</h3> : <h3>No Hay pedidos ....</h3> }
                {cart.map((item)=> ( 
                    <div className="Checkout-item" key={item.title} > 
                  <div className="Checkout-element">
                    <h4>{item.title}</h4> 
                    <span>
                    $
                    {item.price}
                    </span>
                  </div> 
                  <button onClick={handleRemove(item)} type="button"><i class="fas fa-trash-alt"></i></button>
                </div>   
                 ))}
            </div>  
            {cart.length > 0 && (
                <div className="Checkout-sidebar">  
                <h3>{`Precio Total:$ ${handleSumTotal(cart)}`}</h3>  
                <Link to="/checkout/information" >
                <button type="button">Continuar Pedido</button> 
                </Link>
            </div>
             )}
        </div>
    );
}

export default Checkout;