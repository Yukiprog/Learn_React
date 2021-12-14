import {useState} from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
    const [city,setCity] = useState<String>("");
    /*const [results,setResults] = useState({
        city:"",

    }*/
    const getWeather=(e:any)=>{
        e.preventDefault();
        fetch("http://weather.tsukumijima.net/api/forecast/city/140010")
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
  return (
    <div className="test">
        <Title />
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results />
    </div>
  );
}
export default App;
