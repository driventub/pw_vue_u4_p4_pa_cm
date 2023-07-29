import axios from "axios";

export const obtenerEstudianteFachada=async(cedula)=>{
    return await obtenerEstudianteAPI(cedula);
}

export const ingresarEstudianteFachada=(bodyEstudiante)=>{

}

export const actualizarEstudianteFachada=(bodyEstudiante,cedula)=>{

}

export const eliminarEstudianteFachada=(cedula)=>{

}

//-------------------------------------

export const obtenerEstudianteAPI=async(cedula)=>{
    const data=await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);
}

export const ingresarEstudianteAPI=(bodyEstudiante)=>{

}

export const actualizarEstudianteAPI=(bodyEstudiante,cedula)=>{

}

export const eliminarEstudianteAPI=(cedula)=>{

}