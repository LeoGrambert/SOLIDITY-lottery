import "./App.css";
import React, { useEffect, useState } from "react";
import lottery from "../../utils/lottery";

const App = () => {
  const [manager, setManager] = useState(null);

  useEffect(() => {
    (async () => setManager(await lottery.methods.manager().call()))();
  }, []);

  return (
    <div className="App">
        <h2>Lottery Contract</h2>
        {manager && (<p>This contract is managed by {manager}</p>)}
    </div>
  );
}

export default App;