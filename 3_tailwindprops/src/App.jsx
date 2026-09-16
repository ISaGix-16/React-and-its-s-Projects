import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-4xl">
        Tailwind test
      </h1>

      <Card username='Isagi Yoichi' btnText='Bluelock' />
      <Card username='Itachi Uchiha'  />
      
    </>
  );
}

export default App;
