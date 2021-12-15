//Results.tsx

type ResultsPropsType = {
    results: {
        city: String;
        conditionText: String;
        icon: string;
    }
}

const Results = (props: ResultsPropsType) => {
    return (
        <div>
            {
                props.results.city &&
                <div>{props.results.city}
                </div>
            }
            {props.results.conditionText &&
                <div>{props.results.conditionText}
                </div>}
            {props.results.conditionText &&
                <div>
                    <img src={props.results.icon} alt="icon" />
                    <span>{props.results.conditionText}</span>
                </div>}
        </div>
    );
};

export default Results;