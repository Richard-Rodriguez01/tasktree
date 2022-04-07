export default function validarCrearCuenta(valores){
    let errores = {};

    if(!valores.nombre){
        errores.nombre = "El Nombre es Obligatorio";
    }

    if(!valores.precio){
        errores.precio = "El precio es obligatorio";
    }

   // validar descripcion

   if(!valores.descripcion){
       errores.descripcion = "Agrega una descripcion";
   }

    return errores;
}