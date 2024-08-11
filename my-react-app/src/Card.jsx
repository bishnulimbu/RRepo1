import pp from "./assets/pp.jpg";

function Card() {
  //modules can be imported for the styling like style.module.css
  //or internal can also be used by creating a css object and using like sytle={style}
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
