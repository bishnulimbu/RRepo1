function List() {
  const list1 = [
    { id: 1, name: "ram", age: 12 },
    { name: "amanam", age: 12 },
    { name: "sam", age: 100 },
    { name: "hari", age: 111 },
  ];
  list1.sort((a, b) => a.name.localeCompare(b.name));

  const list2 = list1.map((list) => (
    // <li key={list.key}>
    // key should be used for unique id for same data rendering or so.
    <li key={list.name}>
      {list.name} : {list.age}@nbsp
      {/* can be used for not breaking space while adding new html tag or so. */}
    </li>
  ));
  return <ol>{list2}</ol>;
}

export default List;
