import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/ping")
      .then(res => setData(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend Running</h1>
      <p>Backend says: {data}</p>
    </div>
  );
}

export default App;

