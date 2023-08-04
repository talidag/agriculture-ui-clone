import Header from "./components/molecules/header/Header";
import Navbar from "./components/molecules/navbar/Navbar";
import Main from "./components/organisms/main/Main";
import "./index.scss";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Navbar />
      </div>
      <Main />
    </>
  );
}

export default App;
