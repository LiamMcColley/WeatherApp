import React from "react"
import { useState, useEffect } from "react";

function Weather(props) {
    const apikey = process.env.REACT_APP_WEATHER
    const [weatherData, setWeatherData] = useState();
    const [hasData, setHasData] = useState(false)
    const [time, setTime] = useState(0);
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const currentday = day[(((time - time % 1) % 7) + 3) % 7];

    const [newsData, setNewsData] = useState();
    const [hasNews, setHasNews] = useState(false)
    const [hasimg0, setHasimg0] = useState(false)
    const [hasimg1, setHasimg1] = useState(false)
    const [hasimg2, setHasimg2] = useState(false)
    const [hasimg3, setHasimg3] = useState(false)
    const [hasimg4, setHasimg4] = useState(false)
    // const image = hasNews && newsData.media[0]["media-metadata"][0].url

    useEffect(() => { generateWeather(); }, []);
    useEffect(() => { getNews(); }, []);

    const generateWeather = () => {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + props.lat + "&lon=" + props.lon + "&exclude=alerts&appid=6f6c0f6c0285668eb9dbf67a3f71be8e&units=imperial")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setWeatherData(data)
                setHasData(true)
                setTime(data.current.dt / 86400)
            });

    }
    const getNews = () => {
        fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + "qfRNpfnudGhlGatEyAmAmeYg2TAbkOSc")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setNewsData(data)
                setHasNews(true)
                if (data.results[0].media.length > 0) {
                    setHasimg0(true)
                }
                if (data.results[1].media.length > 0) {
                    setHasimg1(true)
                }
                if (data.results[2].media.length > 0) {
                    setHasimg2(true)
                }
                if (data.results[3].media.length > 0) {
                    setHasimg3(true)
                }
                if (data.results[4].media.length > 0) {
                    setHasimg4(true)
                }
            });
    }
    // console.log(image)
    return (
        <>
            <p>lattitude: {props.lat}</p>
            <p>longitude: {props.lon}</p>
            <h1>Current:</h1>
            <h2>{currentday}</h2>
            {hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>Temp: {weatherData.current.temp} degrees Farenheight </h4>}
            {hasData && <h4>Status: {weatherData.current.weather[0].description}</h4>}
            {hasData && <h4>Feels Like: {weatherData.current.feels_like} degrees Farenheight</h4>}
            {hasData && <h4>Humidity: {weatherData.current.humidity} units of humidness</h4>}
            <h2>Hourly:</h2>
            {hasData && <h4>{weatherData.hourly[0].temp} degrees,  feels like {weatherData.hourly[0].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[0].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[1].temp} degrees,  feels like {weatherData.hourly[1].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[1].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[2].temp} degrees,  feels like {weatherData.hourly[2].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[2].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[3].temp} degrees,  feels like {weatherData.hourly[3].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[3].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[4].temp} degrees,  feels like {weatherData.hourly[4].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[4].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[5].temp} degrees,  feels like {weatherData.hourly[5].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[5].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[6].temp} degrees,  feels like {weatherData.hourly[6].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[6].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{weatherData.hourly[7].temp} degrees,  feels like {weatherData.hourly[7].feels_like} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.hourly[7].weather[0].icon + "@2x.png"}></img>}
            <h2>Daily:</h2>
            {hasData && <h4>{day[(((weatherData.daily[1].dt / 86400 - weatherData.daily[1].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[1].temp.day} degrees,  feels like {weatherData.daily[1].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[1].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{day[(((weatherData.daily[2].dt / 86400 - weatherData.daily[2].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[2].temp.day} degrees,  feels like {weatherData.daily[2].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[2].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{day[(((weatherData.daily[3].dt / 86400 - weatherData.daily[3].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[3].temp.day} degrees,  feels like {weatherData.daily[3].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[3].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{day[(((weatherData.daily[4].dt / 86400 - weatherData.daily[4].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[4].temp.day} degrees,  feels like {weatherData.daily[4].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[4].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{day[(((weatherData.daily[5].dt / 86400 - weatherData.daily[5].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[5].temp.day} degrees,  feels like {weatherData.daily[5].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[5].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{day[(((weatherData.daily[6].dt / 86400 - weatherData.daily[6].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[6].temp.day} degrees,  feels like {weatherData.daily[6].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[6].weather[0].icon + "@2x.png"}></img>}
            {hasData && <h4>{day[(((weatherData.daily[7].dt / 86400 - weatherData.daily[7].dt / 86400 % 1) % 7) + 3) % 7]}: {weatherData.daily[7].temp.day} degrees,  feels like {weatherData.daily[7].feels_like.day} degrees</h4>}{hasData && <img src={"https://openweathermap.org/img/wn/" + weatherData.daily[7].weather[0].icon + "@2x.png"}></img>}
            <h2>News:</h2>
            {hasimg0 && <img src={newsData.results[0].media[0]["media-metadata"][0].url}></img>}
            {hasNews && <h4>{newsData.results[0].title}  {newsData.results[0].byline}</h4>}
            {hasNews && <h4>{newsData.results[0].abstract}</h4>}
            {hasNews && <a href={newsData.results[0].url}>View this Story on NYTimes</a>}
            <br></br>
            {hasimg1 && <img src={newsData.results[1].media[0]["media-metadata"][0].url}></img>}
            {hasNews && <h4>{newsData.results[1].title}  {newsData.results[0].byline}</h4>}
            {hasNews && <h4>{newsData.results[1].abstract}</h4>}
            {hasNews && <a href={newsData.results[1].url}>View this Story on NYTimes</a>}
            <br></br>
            {hasimg2 && <img src={newsData.results[2].media[0]["media-metadata"][0].url}></img>}
            {hasNews && <h4>{newsData.results[2].title}  {newsData.results[0].byline}</h4>}
            {hasNews && <h4>{newsData.results[2].abstract}</h4>}
            {hasNews && <a href={newsData.results[2].url}>View this Story on NYTimes</a>}
            <br></br>
            {hasimg3 && <img src={newsData.results[3].media[0]["media-metadata"][0].url}></img>}
            {hasNews && <h4>{newsData.results[3].title}  {newsData.results[0].byline}</h4>}
            {hasNews && <h4>{newsData.results[3].abstract}</h4>}
            {hasNews && <a href={newsData.results[3].url}>View this Story on NYTimes</a>}
            <br></br>
            {hasimg4 && <img src={newsData.results[4].media[0]["media-metadata"][0].url} alt="image"></img>}
            {hasNews && <h4>{newsData.results[4].title}  {newsData.results[0].byline}</h4>}
            {hasNews && <h4>{newsData.results[4].abstract}</h4>}
            {hasNews && <a href={newsData.results[4].url}>View this Story on NYTimes</a>}



            {/* top 5 news stories from the last day, including the title, author, description, image, and a link to the story on the NYT website */}


        </>
    )
}

export default Weather;