import { useState } from "react";
import validate, { handleChange } from "../../utilities/validation";
import styles from "./form.module.css";
import login from "../../assets/img/login.jpg";

export default function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.container_img}>
        <img src={login} alt="Rick and morty" />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.contenido}>
          <label htmlFor="email">Email</label>
          <input
            className={
              errors.email ? styles.warning_input : styles.success_input
            }
            type="text"
            name="email"
            placeholder="ej. correo@hotmail.com"
            value={userData.email}
            onChange={(e) => handleChange(e, userData, setUserData, setErrors)}
          />
          <p className={styles.danger}>{errors.email}</p>
        </div>
        <div className={styles.contenido}>
          <label htmlFor="password">Password</label>
          <input
            className={
              errors.password ? styles.warning_input : styles.success_input
            }
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) => handleChange(e, userData, setUserData, setErrors)}
          />
          <p className={styles.danger}>{errors.password}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
