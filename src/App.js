//App.js

import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom"
import countriesJson from "./countries.json"
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";
import './App.css';

function App() {
	const [loading, setLoading] = useState(false);
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
		setLoading(true);
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
			setLoading(false);
		})
		.catch(err => alert("エラーが発生しました。ページをリロードしてもう一度トライしてください。"));
	}
	
	useEffect(() =>{
		fetch("https://api.covid19api.com/summary")
		.then(res => res.json())
		.then(data => setAllCountriesData(data.Countries))
		.catch(err => alert("エラーが発生しました。ページをリロードしてもう一度トライしてください。"));
	},[]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<TopPage countriesJson={countriesJson} setCountry={setCountry}
					 getCountryData={getCountryData} countryData={countryData}
					 loading={loading} />
				</Route>
				<Route　exact path="/world">
					<WorldPage allCountriesData={allCountriesData} />
				</Route>		
			</Switch>
		</BrowserRouter>
	);
}

export default App;
