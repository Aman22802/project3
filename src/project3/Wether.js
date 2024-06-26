import React, { useEffect, useState } from 'react'

const Wether = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;
    console.log(tempInfo)


    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;

                case "Haze":
                    setWeatherState("wi-fog");
                    break;

                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                 case "rain":
                    setWeatherState("wi-rain")
                 break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    // converted to second into a time sunset 
    let sec = sunset
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <div className="box">
                <div className="icon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="box2">
                    <div className="box3">
                        <h1>{temp}&deg;</h1>
                        <div className="span1">{weathermood}</div>
                        <span className="span2">{name},{country}</span>

                        <div className="date"> {new Date().toLocaleString()} </div>

                        {/* our 4 coloum */}
                        <div className="extra-info">
                            <div className="tem-info-minmax">
                                <div className="two-sided-section">
                                    <p className="aman"><i className={"wi wi-sunset"}></i></p>
                                    <p className="extra-info-left">
                                        sunset<br />
                                        {timeStr}

                                    </p>
                                </div>

                                <div className="two-sided-section">
                                    <p className="bhai"><i className={"wi wi-humidity"}></i></p>
                                    <p className="extra-info-left1">
                                        humidity
                                        <h4>{humidity}</h4>
                                    </p>
                                </div>

                                <div className="two-sided-section">
                                    <p className="choti"><i className={"wi wi-rain"}></i></p>
                                    <p className="extra-info-left2">
                                        <h6>pressure</h6>
                                        <span className="pressure">{pressure}</span>
                                    </p>
                                </div>

                                <div className="two-sided-section">
                                    <p className="juli"><i className={"wi wi-strong-wind"}></i></p>
                                    <p className="extra-info-left2">
                                        <h5>Wind</h5>
                                        <span className="wind">{speed}</span>
                                    </p>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Wether
