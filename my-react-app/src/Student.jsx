import PropTypes from "prop-types";

function Student(props) {
  return (
    <div>
      <p>
        My Name is: {props.name} and I am {props.age}. And I am a Student.
        {props.isStudent ? "Yes" : "no"}
      </p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default Student;
