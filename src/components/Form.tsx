//Form.tsx

type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<String>>
    getWeather: (e: any) => void
}
const Form = (props: FormPropsType) => {
    return (
        <form>
            <input type="text" name="city" placeholder="cityname" onChange={e => props.setCity(e.target.value)} />
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>
    );
}
export default Form;