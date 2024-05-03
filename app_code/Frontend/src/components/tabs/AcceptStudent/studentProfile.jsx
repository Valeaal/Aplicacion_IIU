import React from "react";
export default function StudentProfile(props) {
    const { alumnoId, nombreAlumno, DOBalumno, nombrePadre, handleClickReject, handleClickAccept } = props;

    const formattedDate = (dateString) => {
            const dateObject = new Date(dateString);
            return dateObject.toISOString().split('T')[0];
    };
    

    return (
        <div className="container my-3" >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="fatherName">Nombre del Padre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombrePadre}
                                    disabled
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="studentName">Nombre del Alumno:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombreAlumno}
                                    disabled
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="dob">Fecha de Nacimiento del Alumno:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={formattedDate(DOBalumno)}
                                    disabled
                                />
                            </div>
                            <div className="form-group d-flex justify-content-center mb-3">
                                <button type="submit" className="btn btn-primary mx-2" onClick={() => handleClickAccept(alumnoId)}>Aceptar</button>
                                <button type="submit" className="btn btn-danger mx-2" onClick={() => handleClickReject(alumnoId)}>Rechazar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}