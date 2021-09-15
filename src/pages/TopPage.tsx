//Toppage.js

import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

type TopPageType = {
    countriesJson: {
        Country: string,
        Slug: string,
    }[],
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countryData: {

        date: string,
        newCofirmed: number,
        totalCofirmed: number,
        newDeaths: number,
        totalDeaths: number,
    },
    loading: boolean,
}

const TopPage = ({countriesJson, setCountry,
                  countryData, loading}: TopPageType) => {
    return (
        <div className="top-page-container">
            <div>
                <Header />
                <Title />
                <Selector countriesJson={countriesJson} setCountry={setCountry} />
                <Results  countryData={countryData} loading={loading}/>
            </div>
        </div>
    );
};

export default TopPage;