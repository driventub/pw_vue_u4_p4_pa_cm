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

const head ={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjkyNzUwNzgyLCJleHAiOjE2OTQ3NTA3ODJ9.yUB7QMthgm71fvZTKFvXTSzR8PPQ9ylEo2LHBygw8TmH6BxeaJy08vPIPY6XlKjKSO5FvNxkK7bNf2tXRdcnKw",
    "Mensaje": "Valor1"
}

const obtenerEstudianteAPI=async(cedula)=>{
    const data=await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);
    return data;
}

const ingresarEstudianteAPI=(bodyEstudiante)=>{
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes` , bodyEstudiante,{headers:head}).then(r=>r.data);
}

const actualizarEstudianteAPI=(bodyEstudiante,id)=>{
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}` , bodyEstudiante,{headers:head}).then(r=>r.data);
}

const eliminarEstudianteAPI=(cedula)=>{
    axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,{headers:head}).then(r=>r.data);
}

const obtenerEstudianteAxios=async(cedula)=>{
   
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,{headers:{
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjkyNzUwNzgyLCJleHAiOjE2OTQ3NTA3ODJ9.yUB7QMthgm71fvZTKFvXTSzR8PPQ9ylEo2LHBygw8TmH6BxeaJy08vPIPY6XlKjKSO5FvNxkK7bNf2tXRdcnKw",
        "Mensaje": "Valor1"
    }}).then(r=>r.data);
    console.log("desde el metodo>>>> " + data);
    return data;
}



