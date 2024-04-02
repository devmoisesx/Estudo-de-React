import Title from "../../objects/Title";
import "./styles.css";

const Home = () => {
  document.title = "Estudo de React";

  return (
    <>
      <Title level={1}>Página inicial</Title>
    </>
  );
};

export default Home;
