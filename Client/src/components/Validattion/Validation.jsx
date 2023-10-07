
const validateData = (form, errors, setErrors) => {
    let updatedErrors = { ...errors };

    if (!form.email) {
        updatedErrors.email = 'Email Vacio';
    } else if (!/^[a-zA-Z0-9._%+-]{1,32}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(form.email)) {
        updatedErrors.email = 'Email Invalido';
    } else {
        updatedErrors.email = '';
    }

    if (!form.password) {
        updatedErrors.password = 'Contraseña Vacía';
    } else if (!/^(?=.*[0-9])(?=.{6,10})/.test(form.password)) {
        updatedErrors.password = 'Contraseña debe tener al menos 1 número y longitud entre 6 y 10 caracteres';
    } else {
        updatedErrors.password = '';
    }

    setErrors(updatedErrors);
}
export default validateData;