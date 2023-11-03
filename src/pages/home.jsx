import './home.css';
import Oranges from '../test/orange.jpeg';

function Home() {
  return (
    <div className="home page">
      <h1 className="title">Organika Store</h1>
      <h3>Fresh products, high prices!</h3>

      <img src="/images/orange.jpeg" alt=""></img>

      <img src={Oranges} alt=""></img>
    </div>
  );
}

export default Home;
