function List(){
  const list1 =["ram","sam","hari"];
  const list2 =list1.map(list=><li>{list}</li>);
  return <ol>{list2}</ol>
}

export default List;
