const btnEnviar = document.getElementById('btn-enviar');

const validacion = (e) => {
    e.preventDefault();
    const Nombre = document.getElementById('name');
    const direccionEmail = document.getElementById('email');
    if (Nombre.value === "") {
        alert("por favor, escribe tu nombre");
        Nombre.focus();
        return false;
    }
    if (direccionEmail.value === "") {
        alert("Por favor,escribe tu correo electronico");
        direccionEmail.focus();
        return false;
    }
    if (!direccionEmailvalido (direccionEmail.value)) {
        alert("Por favor, escribe un correo eléctronico válido");
        EmailAdress.focus();
        return false;
    }

    return true;

}
const Emailvalido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+s/.test(email);
}
btnEnviar.addEventListener('click', validacion);
