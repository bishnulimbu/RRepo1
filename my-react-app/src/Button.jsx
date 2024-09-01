function Button() {
  const clicker = (e) => (e.target.textContent = "clicked");
  return (
    <>
      <button onClick={(e) => clicker(e)}>ClickMe!</button>
    </>
  );
}

export default Button;
