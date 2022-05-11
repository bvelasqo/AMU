import React from "react";
import {Card} from "react-bootstrap";

export default function Activity({activity}) {
  const fecha_agendar_date = new Date(activity.fecha_agendar);
  const fecha_realizacion_date = new Date(activity.fecha_realizacion);
  const fecha_agendar = fecha_agendar_date.getDate() + "/" + (fecha_agendar_date.getMonth() + 1) + "/" + fecha_agendar_date.getFullYear();
	const fecha_realizacion = fecha_realizacion_date.getDate() + "/" + (fecha_realizacion_date.getMonth() + 1) + "/" + fecha_realizacion_date.getFullYear();
  return (
		<div>
			<Card style={{ width: '18rem' }} className='text-center shadow rounded m-2'>
				<Card.Header>{activity.tipo_actividad}</Card.Header>
				<Card.Body>
					<Card.Title>{activity.nombre_equipo}</Card.Title>
					<Card.Text>
						{activity.tipo_actividad + " "} designado a{" "}
						{activity.responsable} en el laboratorio{" "}
						{activity.laboratorio} agendada el{" "}
						{fecha_agendar} actualmente el estado del
						equipo es {activity.estado_equipo}.
					</Card.Text>
					<Card.Link href="#">editar</Card.Link>
				</Card.Body>
				<Card.Footer className="text-muted">
					{fecha_realizacion}
				</Card.Footer>
			</Card>
		</div>
	);
}
