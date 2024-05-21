import React from "react";
import faqEveryone from "../faq/faqEveryone";
import * as jwt from 'jwt-decode';

function Faq() {
  const token = sessionStorage.getItem('token'); //Recuperamos el token

  let tipo = 'Everyone';

  if (token) {
    //Si el token está lo decodificamos y guardamos el tipo de usuario que ha iniciado sesión
    const tokenDecoded = jwt.jwtDecode(token);
    tipo = tokenDecoded.userType;
    console.log(tipo);
  }

  return <>
            <faqEveryone />
        </>;
}

export default Faq;