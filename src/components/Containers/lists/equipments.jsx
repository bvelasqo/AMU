import React, {useEffect} from "react";
import {getEquipments, getEquipmentWithVariables} from "../../../services/equipments";
import CardEquipment from "../../Content/cards/equipment";
import VariablesModal from "../../Content/modals/variables";

export default function ListEquipments() {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [equipments, setEquipments] = React.useState([]);
	const [variables, setVariables] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	useEffect(() => {
		setLoading(true);
		setError(null);
		getEquipments()
			.then((data) => {
				setEquipments(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, []);

	const filterData = (value) => {
		const filteredEquipments = equipments.filter((equipment) => {
			return Object.keys(equipment).some((key) => {
				if (typeof equipment[key] === "string") {
					return equipment[key]
						.toLowerCase()
						.includes(value.toLowerCase());
				}
				return false;
			});
		});
		setEquipments(filteredEquipments);
	};
	const handleChange = (value) => {
		filterData(value);
	};

	const handleVariables = (id) => {
		setShow(true);
		getEquipmentWithVariables(id)
			.then((data) => {
				setVariables(data);
			})
			.catch((err) => {
				handleClose();
				setError(err);
				setLoading(false);
			});
	}

	return (
		<>
		<div className="d-flex justify-content-center flex-wrap align-items-center">
			<div className="form-group m-4 w-75">
				<input
					type="text"
					placeholder="Buscar"
					className="form-control w-100"
					onChange={(e) => {
						handleChange(e.target.value);
					}}
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
					equipments.map((equipment) => {
						return (
							<CardEquipment
								props={equipment}
								handleVariables={handleVariables}
								key={equipment.id}
							></CardEquipment>
						);
					})
				)}
			</div>
		</div>
			<VariablesModal show={show} handleClose={handleClose} variables={variables}></VariablesModal>
		</>
	);
}
