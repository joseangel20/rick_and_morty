export default function Form() {
  return (
    <>
    <div><img src="" alt="" /></div>
      <div>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="ej. correo@hotmail.com"
          />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}
