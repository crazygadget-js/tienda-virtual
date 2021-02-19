import React from 'react'; 
import {GoogleMap,LoadScript,Marker} from '@react-google-maps/api' 
const Map = ({data}) => { 
    const MapStyles={
        height:"50vh", 
        witdh:"100%"
    } 
    const defaultCenter ={
        lat:data.lat, lng:data.lng
    }
    return (
        <LoadScript googleMapsApiKey='AIzaSyAeVhYpfP20dPi_Bwur1P-AZknFdrWi3Gw'>
            <GoogleMap 
                mapContainerStyle={MapStyles}
                zoom={9} 
                center={defaultCenter}
            >
            <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;