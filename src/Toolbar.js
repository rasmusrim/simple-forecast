import React, { useState } from 'react';

export default function Toolbar(props) {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    return (
    <>
        <p>
        Latitude: <input value={latitude} name={"latitude"} onChange={(event) => {
            setLatitude(event.target.value); }}/>
        </p>

        <p>
        Longitude: <input value={longitude} name={"longitude"} onChange={(event) => {
            setLongitude(event.target.value); }} />
        </p>
        
        <button onClick={ () => {
            props.getNewForecast(latitude, longitude)
        }}>Update forecast</button>

    </>)
}