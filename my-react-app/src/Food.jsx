function Food() {
  const food1 = "apple";
  return (
    <ul>
      <li>Banana</li>
      <li>{food1}</li>
      <li>{food1.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
