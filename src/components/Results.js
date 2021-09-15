//Results.js

const Results = (props) => {
    return (
        <div className="results-container">
            <div>
                <p>日付：<span>{props.countryData.date.slice(0,10)}</span></p>
                <p>新規感染者：<span>{props.countryData.newCofirmed.toLocaleString()}</span></p>
                <p>感染者総数：<span>{props.countryData.totalCofirmed.toLocaleString()}</span></p>
                <p>新規死亡者：<span>{props.countryData.newDeaths.toLocaleString()}</span></p>
                <p>死亡者総数：<span>{props.countryData.totalDeaths.toLocaleString()}</span></p>
            </div>
        </div>
    );
};

export default Results;