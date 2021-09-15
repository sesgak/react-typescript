//Results.js

import Loading from "./Loading";

type ResultsType = {
    countryData: {

        date: string,
        newCofirmed: number,
        totalCofirmed: number,
        newDeaths: number,
        totalDeaths: number,
    },
    loading: boolean,
}

const Results = ({countryData, loading}: ResultsType) => {
    const { date, newCofirmed, totalCofirmed, newDeaths, totalDeaths } = countryData;
    return (
        <div className="results-container">
            {loading ?
                        <Loading />
                    : 
                        <div>
                            <p>日付：<span>{date.slice(0,10)}</span></p>
                            <p>新規感染者：<span>{newCofirmed.toLocaleString()}</span></p>
                            <p>感染者総数：<span>{totalCofirmed.toLocaleString()}</span></p>
                            <p>新規死亡者：<span>{newDeaths.toLocaleString()}</span></p>
                            <p>死亡者総数：<span>{totalDeaths.toLocaleString()}</span></p>
                        </div>
            }
        </div>
    );
};

export default Results;