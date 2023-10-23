import ResultTable from "./ResultTable";

const Result = (props) => {
    if(!props.valid) {
        return (
            <p style={{textAlign: "center"}}>No investment calculated yet.</p>
        );
    } else {
        return (
            <ResultTable input={props.input} />
        );
    }
};

export default Result;
