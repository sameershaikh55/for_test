import { useEffect, useState } from "react";

// IMPORTING API FUNCTION
import { apiApi } from "./redux/action";

// REDIX CONNECT
import { connect } from "react-redux";

// IMPORTING CSS
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App({ data, apiApi }) {
	// CHANGE STATE
	const [changeInp, setChangeInp] = useState("");

	useEffect(() => {
		// API CALL ON LOAD
		apiApi();
	}, []);

	return (
		<div className="page_container my-5">
			<div className="inp_container">
				<input
					onChange={(e) => setChangeInp(e.target.value)}
					value={changeInp}
					type="text"
					placeholder="Search"
					className="form-control"
				/>
			</div>

			<div className="container-fluid mt-5">
				<div className="row gy-3">
					{(data.length &&
						// FILTER METHOD FOR SEARCH RESULTS
						data
							.filter((item) => {
								return (
									(item.name !== undefined &&
										item.name
											.toLowerCase()
											.includes(changeInp.toLowerCase())) ||
									""
								);
							})

							// FILTER METHOD TO ENLIST THE RESULTS
							.map((prev, i) => {
								console.log(prev);
								return (
									<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
										<div className="card p-3">{prev.name}</div>
									</div>
								);
							})) ||
						""}
				</div>
			</div>
		</div>
	);
}

// IMPORTINF STATES AND API CALL FUNCTION
const mapStatetoProps = (state) => {
	return {
		data: state.dataRed.data,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		apiApi: function () {
			dispatch(apiApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
