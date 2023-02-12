import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours";
import "./tours.css";
function App() {
  const [state, setstate] = useState([]);
  async function fetchdata() {
    const api = "https://course-api.com/react-tours-project";
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      // console.log(jsonData);
      setstate(jsonData);
    } catch (e) {
      console.log(e, "erroroccured");
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="App">
      <Tours data={state} />
    </div>
  );
}

export default App;
