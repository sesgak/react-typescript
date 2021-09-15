//App.js

import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom"
import countriesJson from "./countries.json"
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";
import './App.css';

function App() {
	const [country, setCountry] = useState("");
	const [countryData, setCountryData] = useState({
		date: "",
		newCofirmed: "",
		totalCofirmed: "",
		newDeaths: "",
		totalDeaths: "",
	});
    
	const [allCountriesData, setAllCountriesData] = useState([]);

    const getCountryData = () => {
        fetch(`https://api.covid19api.com/country/${country}`)
        .then(res => res.json())
        .then(data => {
			setCountryData({
				date: data[data.length -2].Date,
				newCofirmed:data[data.length -2].Confirmed - data[data.length -3].Confirmed,
				totalCofirmed:data[data.length -2].Confirmed,
				newDeaths:data[data.length -2].Deaths - data[data.length -3].Deaths,
				totalDeaths:data[data.length -2].Deaths
			});
    	})
	}
	
	useEffect(() =>{
		fetch("https://api.covid19api.com/summary")
		.then(res => res.json())
		.then(data => setAllCountriesData(data.Countries))
	},[]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData} />
				</Route>
				<Route　exact path="/world">
					<WorldPage allCountriesData={allCountriesData} />
				</Route>		
			</Switch>
		</BrowserRouter>
	);
}

export default App;
