//WorldPage.js

import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card"

interface SingleCountriesDataType {
	Country: string,
	NewConfirmed: number,
	TotalConfirmed: number,
}

interface WorldPageType {
    allCountriesData: Array<SingleCountriesDataType>
}

const WorldPage = ({allCountriesData}: WorldPageType) => {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    );
};

export default WorldPage;
