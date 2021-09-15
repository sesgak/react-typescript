//Results.js

const Results = ({countryData}) => {
    const { date, newCofirmed, totalCofirmed, newDeaths, totalDeaths } = countryData;
    return (
        <div className="results-container">
            <div>
                <p>日付：<span>{date.slice(0,10)}</span></p>
                <p>新規感染者：<span>{newCofirmed.toLocaleString()}</span></p>
                <p>感染者総数：<span>{totalCofirmed.toLocaleString()}</span></p>
                <p>新規死亡者：<span>{newDeaths.toLocaleString()}</span></p>
                <p>死亡者総数：<span>{totalDeaths.toLocaleString()}</span></p>
            </div>
        </div>
    );
};

export default Results;