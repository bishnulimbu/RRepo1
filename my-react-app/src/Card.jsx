import pp from "./assets/pp.jpg";

function Card() {
  return (
    <div className="card">
      <img
        className="card-img"
        src={pp}
        alt="profile-pic"
        style={{ height: "10em" }}
      />
      <h2 className="card-name">MyNameIs</h2>
      <p className="card-text">Product Description and what I do.</p>
    </div>
  );
}

export default Card;
