import axios from "axios";

export function tokenHeader() {

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}
/*
export function usuarioGet() {
    return JSON.parse(localStorage.getItem('usuario'));
}
*/

let usuario = '';
export function guardaDato(){
    tokenHeader();
    await axios.get("/user/loged").then((response) => {
        localStorage.setItem("usuario", JSON.stringify(response.data));
        console.log(localStorage.getItem('usuario'));
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
      });

}
export async function usuarioGet() {
guardaDato()

return this.usuario();
}


export function datoprueba() {
    return 'hola';
}


