import React,{useContext} from 'react'; 
import '../components/styles/Information.css' 
import AppContext from  '../context/AppContext' 
import {Link} from 'react-router-dom' 
import {useForm} from 'react-hook-form'
const Information = ({history}) => { 
    const {state, addTobuyer} = useContext(AppContext) 
    const{register,errors,handleSubmit} = useForm();
    const {cart} = state;
    
    const onSubmit = (data) =>{
        const form =  data  
        const buyer ={
           'name': form.name,
           'email': form.email, 
           'adrress':form.address, 
           'apto':form.apto, 
           'city':form.city, 
           'country':form.country, 
           'state':form.state, 
           'cp':form.cp, 
           'phone':form.phone
        }  
        console.log(buyer) 
        addTobuyer(buyer)
        history.push('/checkout/payment') 
        
    } 
   
    
   
    return (
        <div className="Information">
           <div className="Infomation-content">
               <div className="Information-head">
                  <h3>Informacion del cliente:</h3>
                  <div className="Information-form">
                      <form onSubmit={handleSubmit(onSubmit)} >
                        <input 
                        type="text" 
                        placeholder="Nombre Completo" 
                        name="name"
                        ref={
                          register
                        } 
                        required
                        /> 
                        <input 
                        type="text" 
                        placeholder="Correo Electronico" 
                        name="email"
                        ref={ 
                            register
                        }
                        />
                        <input 
                        type="text" 
                        placeholder="Direccion" 
                        name="address"
                        ref={register}
                        />
                        <input 
                        type="text" 
                        placeholder="Apto" 
                        name="apto"  
                        ref={
                            register
                        }
                        />
                        <input 
                        type="text" 
                        placeholder="Ciudad" 
                        name="city" 
                        ref = {
                            register
                        }
                        />
                        <input type="text" 
                        placeholder="Pais" 
                        name="Country" 
                        ref={
                            register
                        }
                         />
                        <input 
                        type="text" 
                        placeholder="Departamento" 
                        name="state"
                        ref={
                            register
                        }
                        /> 
                        <input type="text" placeholder="Codigo" name="cp"/>
                        <input type="text" placeholder="telefono" name="phone"/> 
                        <div className="Information-buttons">
                        <div className="Information-back" > 
                        <Link to="/checkout">
                        <button className="btn btn secondary">Regresar</button>
                        </Link>
                        </div> 
                        <div className="Information-next" >
                       <button className="btn btn-primary">Pagar</button>
                      </div>
                  </div>
                      </form>
                  </div> 
               </div>
           </div> 
           <div className="Information-sidebar">
                <h3>Pedido:</h3>  
                {cart.map((item)=>( 
                  <div className="Information-item" key={item.title} >
                  <div className="Information-element">
                   <h4>{item.title}</h4> 
                   <span>${item.price}</span>
                </div> 
                </div>
                ))}
               
           </div>
        </div>
    );
}

export default Information;
