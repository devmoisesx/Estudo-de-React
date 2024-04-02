import ListObject from "../../objects/ListObject";
import Title from "../../objects/Title";
import "./styles.css";

const List = () => {
  document.title = "Lista";

  const list = ["1", "2", "3"];

  return (
    <article className="list">
      <Title level={1}>Listas</Title>

      <ListObject list={list} />
    </article>
  );
};

export default List;
