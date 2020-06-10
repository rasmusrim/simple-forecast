import React, { useState, useEffect } from 'react';

export default function Temperature(props) {

    const [temperature, setTemperature] = useState("Unknown");

    useEffect(() => {
        fetch("https://api.met.no/weatherapi/locationforecast/1.9/.json?lat=" + props.latitude + "&lon=" + props.longitude)
            .then(response => response.json())
            .then(response => {
                const temperature = response.product.time[0].location.temperature.value;

                setTemperature(temperature);

            }
        )
    }, [props.latitude, props.longitude]);

    return (<>{temperature} degrees celcius</>)
}