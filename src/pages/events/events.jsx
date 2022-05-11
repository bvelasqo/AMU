import React from "react";
import { useParams } from "react-router-dom";
import EventsList from "../../components/Containers/lists/events";

export default function EventsPage() {
	const { activity } = useParams();
	return <EventsList activity={activity}></EventsList>;
}
