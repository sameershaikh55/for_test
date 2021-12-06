import { DATA } from "./type";
import axios from "axios";

const apiFunc = (data) => {
	return {
		type: DATA,
		payload: data,
	};
};

export const apiApi = () => {
	return (dispatch) => {
		axios.get("https://swapi.dev/api").then((res) => {
			// FILTERING VALUES
			let valuesData = Object.values(res.data).map((val) => val);

			// API CALLS
			valuesData.map((prev) => {
				axios.get(prev).then((res) => {
					dispatch(apiFunc(res.data.results));
				});
			});
		});
	};
};
