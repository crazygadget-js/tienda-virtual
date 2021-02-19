import React,{useContext} from 'react'; 
import AppContext from '../context/AppContext' 
import '../components/styles/Success.css'
import Map from '../components/Map' 
import useGoogleAddress from '../Hooks/useGoogleAdrress'
const Success = () => { 
    const {state} = useContext(AppContext);
    const {buyer} = state; 
    const location = useGoogleAddress(buyer[0].address)
    return (
        <div className="Success" >
            <div className="Success-Content" >
                <h2>{`MUCHAS GRACIAS POR DEJARTE ROBAR BOBO HP ${buyer.email}`}</h2>
            </div> 
            <div className="Success-map" >
                <Map data={location} />
            </div>
        </div>
    );
}

export default Success;