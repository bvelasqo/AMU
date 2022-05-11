import React from "react";
import "./App.css";
import Login from "./components/Containers/login/login";
import RoutesApp from "./config/Routes";
import useToken from "./hooks/useToken";

const App = () => {
	const {token, setToken} = useToken();

	if (!token) {
		return <Login setToken={setToken} />;
	}

	return <RoutesApp setToken={setToken}/>;
};

export default App;
