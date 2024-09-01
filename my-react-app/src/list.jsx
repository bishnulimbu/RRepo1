function List(props) {
  const newList = props.appList;
  const category = props.category;
  // list1.sort((a, b) => a.name.localeCompare(b.name));

  // newList.sort((a, b) => a.name.localeCompare(b.name));
  newList.sort((a, b) => b.name.localeCompare(a.name));

  const list2 = newList.map((list) => (
    // <li key={list.key}>
    // key should be used for unique id for same data rendering or so.
    <li key={list.age}>
      {list.name} : <b>{list.age}</b>
      {/* @nbsp */}
      {/* can be used for not breaking space while adding new html tag or so. */}
      {/* this is probably the last of it and last of it for me also probably. yes */}
      {/* probably. */}
    </li>
  ));
  return (
    <>
      <h1 className="cat">{category}</h1>
      <ol className="dog">{list2}</ol>
    </>
  );
}
List.defaultProps = {
  category: "category",
  appList: [],
  //as map will not run with undefined value, so an empty array is set at default for it value.
};
export default List;
