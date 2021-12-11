//Form.tsx
import {useState} from 'react';

const Form = () => {
    const [city,setCity] = useState<String>("");
    const getWeather=(e:any)=>{
        e.preventDefault();
        fetch("http://weather.tsukumijima.net/api/forecast/city/400040")
        .then(res=>res.json())
        .then(data=>console.log(data));
    }
    return(
        <form>
            <input type="text" name="city" placeholder="cityname" onChange={e=>setCity(e.target.value)} />
            <button type="submit" onClick={getWeather}>Get Weather</button>

        </form>
    );
}
export default Form;