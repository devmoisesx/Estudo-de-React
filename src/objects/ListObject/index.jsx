import "./styles.css";

const ListObject = ({ list }) => {
  return (
    <ul className="list-object">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListObject;
