import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import List from "./list.jsx";

function App() {
  const list1 = [
    { id: 1, name: "ram", age: 12 },
    { name: "amanam", age: 12 },
    { name: "sam", age: 100 },
    { name: "hari", age: 111 },
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
      <List appList={list1} />
      {/* <Footer />; */}
    </>
  );
}

export default App;
