import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultStateType = {
    city: string;
    conditionText: string;
    icon: string;
}

function App() {
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultStateType>({
        city: "",
        conditionText: "",
        icon: ""
    });

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("http://weather.tsukumijima.net/api/forecast/city/140010")
            .then(res => res.json())
            .then(data => {
                setResults({
                    city: data.location.city,
                    conditionText: data.forecasts[0].telop,
                    icon: data.forecasts[0].image.url,
                })
            })
    }
    return (
        <div className="wrapper">
            <div className="container">
                <Title />
                <Form setCity={setCity} getWeather={getWeather} />
                <Results results={results} />
            </div>
        </div>
    );
}
export default App;
