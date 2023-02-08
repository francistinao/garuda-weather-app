//vite documentation of handling
//api fetch
export default function fetchJson(input, init, query) {
	return fetch(
		`${input}?${new URLSearchParams({
			...query,
			appid: import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY,
		}).toString()}`,
		//parsing object url to string
		init
	).then(async (res) => ({
		data: await res.json(),
		res,
	}));
}

export const fetchCity = async (city) => {
	return fetchJson(
		"https://api.openweathermap.org/data/2.5/weather",
		undefined,
		{ q: city }
	);
};
