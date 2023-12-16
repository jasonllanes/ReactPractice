import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <NavBar />
      <Main />
    </div>
  );
}

export default App;
