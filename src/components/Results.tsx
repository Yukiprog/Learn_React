//Results.tsx

type ResultsPropsType = {
    results: {
        city: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultsPropsType) => {
    return (
        <div>
            {
                props.results.city &&
                <div className="results-city">{props.results.city}
                </div>
            }
            {props.results.conditionText &&
                <div>{props.results.conditionText}
                </div>}
            {props.results.conditionText &&
                <div className="results-condition">
                    <img src={props.results.icon} alt="icon" />
                    <span>{props.results.conditionText}</span>
                </div>}
        </div>
    );
};

export default Results;