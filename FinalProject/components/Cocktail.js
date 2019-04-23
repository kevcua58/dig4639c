
function fetchDrinks() {
	let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
	return fetch(url)
		.then(response => response.json())
		.then(responseJson => {
			return responseJson.results.strDrink;
		})
		.catch(error => {
			console.error(error);
		})
}

export default { fetchDrinks: fetchDrinks };
