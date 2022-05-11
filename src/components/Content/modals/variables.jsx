import {Modal} from "react-bootstrap";
import React, { useEffect } from "react";

export default function VariablesModal({
	show,
  variables,
	handleClose,
}) {
	useEffect(() => {
		console.log(variables);
		console.log(show);
	}, [variables, show]);
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Variables de {variables?.nombre_equipo}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="container">
					{
						variables.variables?.length > 0 ?
						variables.variables?.map((variable, index) => {
						return (
							<div key={index}>
								<div className="row">
									<div className="col-md-6">
										<label>{variable}</label>
									</div>
									<div className="col-md-6">
										<input
											type="text"
											className="form-control"
											value={variable}
										/>
									</div>
								</div>
								<hr />
							</div>
						);
					}): <div>No hay variables</div>}
				</div>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
