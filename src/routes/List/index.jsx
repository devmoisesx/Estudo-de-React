import ListObject from "../../objects/ListObject";
import "./styles.css";

const List = () => {
  document.title = "Lista";

  const list = ["1", "2", "3"];

  return (
    <article className="list">
      <h1 className="title">Listas</h1>

      <ListObject list={list} />
    </article>
  );
};

export default List;
