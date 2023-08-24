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

//En el config vamos a enviar todos los datos de cabecera

// const headers= {
//     "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyNzUwMDg2LCJleHAiOjE2OTQ3NTAwODZ9.vK2oHt3vMlcnzIYx312CToy1eQaVWj5FP7StDt1aQ-jtJfYiFPUOKSa-lOULRgQGTSxMo3w8vBAmxWI0VF7C7A",
//     "Mensaje": "Valor1"
// }

const obtenerEstudianteAPI=async(cedula)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODM5OTgyLCJleHAiOjE2OTQ4Mzk5ODJ9.-iP7BTP4N-bW-lxD_uMugqCCXStyjkHAbFYFcULa9Se5_Yyy1zQb5jzmkN9-kwof9jKUEdt4Jv1JiulfUt_1UA",
        "Mensaje": "Valor1"
    }

    const data=await fetch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`,{headers: headers}).then(r=>r.json());
    console.log(data);
    return data;
}

const ingresarEstudianteAPI=(bodyEstudiante)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODM5OTgyLCJleHAiOjE2OTQ4Mzk5ODJ9.-iP7BTP4N-bW-lxD_uMugqCCXStyjkHAbFYFcULa9Se5_Yyy1zQb5jzmkN9-kwof9jKUEdt4Jv1JiulfUt_1UA",
        "Mensaje": "Valor1"
    }

    axios.post(`http://localhost:8081/API/v1.0/Matricula/estudiantes` , bodyEstudiante,{headers: headers}).then(r=>r.data);
}

const actualizarEstudianteAPI=(bodyEstudiante,id)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODM5OTgyLCJleHAiOjE2OTQ4Mzk5ODJ9.-iP7BTP4N-bW-lxD_uMugqCCXStyjkHAbFYFcULa9Se5_Yyy1zQb5jzmkN9-kwof9jKUEdt4Jv1JiulfUt_1UA",
        "Mensaje": "Valor1"
    }

    axios.put(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}` , bodyEstudiante,{headers: headers}).then(r=>r.data);
}

const eliminarEstudianteAPI=(cedula)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODM5OTgyLCJleHAiOjE2OTQ4Mzk5ODJ9.-iP7BTP4N-bW-lxD_uMugqCCXStyjkHAbFYFcULa9Se5_Yyy1zQb5jzmkN9-kwof9jKUEdt4Jv1JiulfUt_1UA",
        "Mensaje": "Valor1"
    }

    axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`,{headers: headers}).then(r=>r.data);
}

const obtenerEstudianteAxios=async(cedula)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3VhcmlvIiwiaWF0IjoxNjkyODM5OTgyLCJleHAiOjE2OTQ4Mzk5ODJ9.-iP7BTP4N-bW-lxD_uMugqCCXStyjkHAbFYFcULa9Se5_Yyy1zQb5jzmkN9-kwof9jKUEdt4Jv1JiulfUt_1UA",
        "Mensaje": "Valor1"
    }

    const data = axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`,{headers: headers}).then(r=>r.data);
    console.log("desde el metodo>>>> " + data);
    return data;
}



