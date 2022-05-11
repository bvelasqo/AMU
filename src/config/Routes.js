import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AppLayout from "../components/Containers/layout/AppLayout";
import Login from "../components/Containers/login/login";
import Equipments from "../pages/equipments/Equipments";
import EventsPage from "../pages/events/events";
import NotFound from "../pages/NotFound/NotFound";

const RoutesApp = ({setToken}) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login setToken={setToken} />} />
				<Route path="/" element={<AppLayout />}>
					<Route path="*" element={<NotFound />} />
					<Route exact path="/" element={<Equipments />} />
					<Route exact path="/activities" element={<EventsPage />} />
					<Route exact path="/activities/:activity" element={<EventsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
