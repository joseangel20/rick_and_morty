const validate = ({ email, password }) => {
  const errors = {};
  const LIMIT_CHARACTERES = 35;
  const REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!email) errors.email = "Este campo no puede estar vacío";
  else if (!REGEX.test(email)) errors.email = "Tiene que ser un email valido";
  else if (email.length > LIMIT_CHARACTERES)
    errors.email = "Longitud menos de 35 caracteres";
  if (password.length < 6 && password.length <= 10)
    errors.password = "Longitud entre 6 y 10 caracteres";
  else if (!/[0-9]+/.test(password))
    errors.password = "Debe contener al menos un número";

  return errors;
};

export const handleChange = (e, userData, setUserData, setErrors) => {
  const property = e.target.name;
  const value = e.target.value;

  setUserData({
    ...userData,
    [property]: value,
  });

  setErrors(validate({ ...userData, [property]: value }));
};

export default validate;
