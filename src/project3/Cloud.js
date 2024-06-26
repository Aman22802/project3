import React, { useEffect, useState } from "react";
import Wether from "./Wether";
import "./style.css"


const Cloud = () => {

    const[searchValue, setSearchvalue] = useState("bihar"); 
    const[tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () =>{ 
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fc823f389d66d73acb01b0521277b7a3`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data)

            const {temp,humidity,pressure} = data.main;
            // console.log(main)
            const {main: weathermood} = data.weather[0]; 
            const {name} = data;
            const {speed} = data.wind
            const {country,sunset} = data.sys
            
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,

            };

            setTempInfo(myNewWeatherInfo)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        getWeatherInfo();
    },[])   /*-----> jub bhi hum ishmee empty array pass krenge to srif 1 bar he call hoga  */
    return (
        <>

            <div className="saerchbar">
                <input id="input" type="search" placeholder="serach your country" 
                value={searchValue} onChange={(e) => setSearchvalue(e.target.value)}
                />
                <div className="btn" onClick={getWeatherInfo}>search</div>
            </div>

             {/* our card temp */}

            <Wether tempInfo={tempInfo}/>


        </>
    )
}

export default Cloud
