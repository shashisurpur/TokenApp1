import { GoogleMap, InfoWindow, Marker, MarkerClusterer, useLoadScript } from '@react-google-maps/api';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './clusteringMap.css'

const center = {
    lat: 12.976750,
    lng:77.575279
};


const containerStyle = {
    width: '100%',
    height: '500px'
  };

const ClusteringMap = (props) => {
    const datas =[];
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAk_WKbxyPqYek3I2CS_1kfeKnv0bnfH9s',
        
    });
    const [selectedMarker,setSelectedMarker] = useState(null)
    const [isClicked,setIsClicked] = useState(false)
    const mapRef = useRef();

    props.clients && props.clients.map(client => datas.push(client))
    useEffect(() => {
       
    }, [])
    
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    
    const handleMarkerClick =(marker)=>{
        setIsClicked(!isClicked)
        setSelectedMarker(marker)
          
    }
    
    const  handleOnClose=()=>{
        setIsClicked(!isClicked)
        setSelectedMarker(null)
    }
    
    const options = {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
    }
    const infoOptions={
       /*  backgroundColor:'#26272b', */
        backgroundColor: '#26272b !important'
    }
    //console.log(selectedMarker)
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
         <div className="cotainer">  
            <GoogleMap 
                mapContainerStyle={containerStyle}
                onLoad={onMapLoad}
                center={center}
                zoom={12}
            >
                <MarkerClusterer options={options}>
                {
                    (clusterer) =>
                    datas.map( (data) => 
                    (
                        <Marker key={data.id} 
                            position={{lat:parseFloat(data.latitude), lng:parseFloat(data.longitude) }} 
                            clusterer={clusterer} 
                            onClick={() => handleMarkerClick(data) } 
                        >
                            {   
                                /* selectedMarker === data */ isClicked && selectedMarker===data &&
                               /*  <div className="infoWindow"> */
                                <InfoWindow options={infoOptions} anchor="infoWindow" 
                                    onCloseClick={handleOnClose}
                                >
                                    <div style={{color:'black'}}>
                                        <h4>{data.name} </h4>
                                        <p>{data.address} </p>
                                        <Link to={`/home/${data.id}`} >Click Me for token </Link>
                                    </div>
                                    
                                </InfoWindow>
                                /* </div> */
                            }  
                        </Marker>
                    ))
                }

                </MarkerClusterer>
            </GoogleMap>

        </div> 
    )
}

export default ClusteringMap
