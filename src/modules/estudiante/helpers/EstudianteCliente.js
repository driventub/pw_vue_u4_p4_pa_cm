import axios from "axios";

export const obtenerEstudianteFachada=async(cedula)=>{
    console.log('Axios');
    return await obtenerEstudianteAxios(cedula);
}

export const ingresarEstudianteFachada=(bodyEstudiante)=>{
    ingresarEstudianteAPI(bodyEstudiante);
}

export const actualizarEstudianteFachada=(bodyEstudiante,id)=>{
    actualizarEstudianteAPI(bodyEstudiante,id);
}

export const eliminarEstudianteFachada=(cedula)=>{
    eliminarEstudianteAPI(cedula);
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

const obtenerEstudianteAPI=async(cedula)=>{
    const data=await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);
    return data;
}

const ingresarEstudianteAPI=(bodyEstudiante)=>{
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes` , bodyEstudiante).then(r=>r.data);
}

const actualizarEstudianteAPI=(bodyEstudiante,id)=>{
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}` , bodyEstudiante).then(r=>r.data);
}

const eliminarEstudianteAPI=(cedula)=>{
    axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.data);
}

const obtenerEstudianteAxios=async(cedula)=>{
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.data);
    console.log("desde el metodo>>>> " + data);
    return data;
}



