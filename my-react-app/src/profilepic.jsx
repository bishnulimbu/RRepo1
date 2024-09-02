import pp from "./assets/pp.jpg";
const handleClick = (e) => (e.target.style.display = "none");
function ProfilePic() {
  return <img src={pp} onClick={(e) => handleClick(e)}></img>;
}

export default ProfilePic;
