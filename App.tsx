import React from "react";
import { Provider } from "react-redux";
import { Route } from "./src/routes";
import { store } from "./src/store";
function App() {
	return (
		<Provider store={store}>
			<Route />
		</Provider>
	);
}

export default App;
