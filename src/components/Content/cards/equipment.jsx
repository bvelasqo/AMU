import React from "react";
import {Button, Card, Row} from "react-bootstrap";

function CardEquipment({props, handleVariables}) {
	// const navigate = useNavigate();

	const editHandleClick = () => {
		console.log("Editando equipo: ", props.id);
		// navigate("/edit/"+  props.id)
	};
	return (
		<>
			<Card
				style={{width: "18rem", borderRadius: "30px"}}
				className="text-center shadow m-2"
			>
				<Card.Header
					style={{backgroundColor: "#de3a2f", color: "#fff"}}
				>
					Estado del equipo: {props.estado || "disponible"}
				</Card.Header>
				<Card.Body>
					<Card.Title>
						{props.nombre_generico || "Nombre genérico"}
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						serie: {props.serie || "ADAF4WSDF"} (
						{props.marca || "Marca"}-{props.modelo || "Modelo"})
					</Card.Subtitle>
					<Card.Text>código: {props.codigo || "12452351"}</Card.Text>
					<Row className="justify-content-center">
						<Button
							variant="primary"
							size="sm"
							className="m-2 w-25"
							onClick={() => handleVariables(props.id)}
						>
							<i class="bx bx-info-circle"></i>{" "}
						</Button>
						<Button
							variant=""
							size="sm"
							className="m-2 w-25 btn-warning"
							onClick={editHandleClick}
						>
							<i class="bx bx-edit"></i>
						</Button>
						<Button
							variant=""
							size="sm"
							className="m-2 w-25 btn-info"
						>
							<i class="bx bxs-calendar-event"></i>{" "}
						</Button>
					</Row>
				</Card.Body>
				<Card.Footer className="text-muted">
					fecha última actividad:{" "}
					{props.fecha_ultima_actividad || "2022/05/14"}
				</Card.Footer>
			</Card>
		</>
	);
}

export default CardEquipment;
