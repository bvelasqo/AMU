import React, {useEffect} from "react";
import Activity from "../../Content/cards/activities";

export default function EventsList({activity}) {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [search, setSearch] = React.useState("");
	const [activities, setActivities] = React.useState([]);

	const fetchActivities = async () => {
		console.log(activity);
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				activity
					? `https://amu-lab.herokuapp.com/api/eventos/${activity}`
					: `https://amu-lab.herokuapp.com/api/eventos`
			);
			const data = await response.json();
			setActivities(data);
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchActivities().then(() => {
			setLoading(false);
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activity]);

	const filterData = (value) => {
		const lowercasedValue = value.toLowerCase().trim();
		if (lowercasedValue === "") setActivities(fetchActivities());
		else {
			console.log(activities);
			const filteredData = activities?.filter((item) => {
				return Object.keys(item).some((key) =>
					item[key].toString().toLowerCase().includes(lowercasedValue)
				);
			});
			setActivities(filteredData);
			console.log(filteredData);
		}
	};

	const handleChange = (value) => {
		setSearch(value);
		filterData(value);
	};
	return (
		<div className="d-flex justify-content-center flex-wrap align-items-center">
			<div className="form-group m-4 w-75">
				<input
					type="text"
					placeholder="Buscar"
					className="form-control w-100"
					value={search}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>
			<div className="d-flex justify-content-center flex-wrap align-items-center">
				{loading ? (
					<div className="spinner-border text-primary" role="status">
						<span className="sr-only"></span>
					</div>
				) : error ? (
					<div className="alert alert-danger" role="alert">
						Error al cargar los equipos
					</div>
				) : (
					activities?.map((activity) => (
						<Activity key={activity.id} activity={activity} />
					))
				)}
			</div>
		</div>
	);
}
