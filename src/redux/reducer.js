import { DATA } from "./type";

const initialState = {
	data: "",
};

const dataRed = (state = initialState, action) => {
	switch (action.type) {
		case DATA:
			// CONVERTING TITLE KEY TO NAME KEY
			let dataConcat = action.payload.concat(state.data);
			const newArrayOfObj = dataConcat.map(({ title: name, ...rest }) => ({
				name,
				...rest,
			}));

			// REMOVING DUPLICATES
			const filtered = newArrayOfObj.filter(
				(v, i, a) => a.findIndex((t) => t.name === v.name) === i
			);

			return {
				...state,
				data: filtered,
			};
		default:
			return state;
	}
};
export default dataRed;
