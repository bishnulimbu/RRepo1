//proptypes can be used for defining the varaibale type
import PropTypes from "prop-types";

function Greetings(props) {
  const success = <p className="success">You are welcome {props.username}</p>;

  const failure = (
    <p className="failure">you aren't logged in mr {props.username}</p>
  );

  return props.isLoggedIn ? success : failure;
}

Greetings.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default Greetings;
