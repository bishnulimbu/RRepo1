import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import List from "./list.jsx";
import Button from "./Button.jsx";
import Profile from "./profilepic.jsx";
import Component1 from "./Component1.jsx";
import Counter1 from "./Counter1.jsx";
import Component2 from "./Component2.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Person from "./Person.jsx";
import Array1 from "./Array1.jsx";
import CarObject from "./CarObject.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  const list1 = [
    { id: 1, name: "ram", age: 12 },
    { name: "amanam", age: 12 },
    { name: "sam", age: 100 },
    { name: "hari", age: 111 },
  ];
  const list2 = [
    // { id: 1, name: "ram", age: 12 },
    // { name: "amanam", age: 12 },
    // { name: "sam", age: 100 },
    // { name: "hari", age: 111 },
  ];
  // list1.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {/* <Header /> */}
      {/* <Greeting isLoggedIn={true} username="ram" /> */}
      {/* <Greeting isLoggedIn={111} username="ram" /> */}
      {/* <Student name="ramu Sam" age={100} isStudent={true} /> */}
      {/* <Student name="ramu Sam" age={100} isStudent={true} /> */}
      {/* <Student name="ramu Sam" age={100} isStudent={true} /> */}
      {/* <Student name="ramu Sam" age={100} isStudent={true} /> */}
      {/* <Student name="ramu Sam" age={100} isStudent={true} /> */}
      {/* <Student /> */}
      {/* <Food /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* {list1.length > 0 && <List appList={list1} category="Names" />} */}
      {/* {list2.length > 0 && <List appList={list2} category="Names" />} */}
      {/* <Footer />; */}
      {/* <Button /> */}
      {/* <Profile /> */}
      {/* <Component1 /> */}
      {/* <Counter1 /> */}
      {/* <Component2 /> */}
      {/* <ColorPicker /> */}
      {/* <Person /> */}
      {/* <Array1 /> */}
      {/* <CarObject /> */}
      <ToDoList />
    </>
  );
}

export default App;
