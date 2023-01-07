import "./App.css";
import React, { useEffect, useState } from "react";
import lottery from "../../utils/lottery";
import web3 from "../../utils/web3";
import Footer from "../Footer/Footer";

const App = () => {
  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');

  useEffect(() => {
    (async () => setManager(await lottery.methods.manager().call()))();
    (async () => setPlayers(await lottery.methods.getPlayers().call()))();
    (async () => setBalance(await web3.eth.getBalance(lottery.options.address)))();
  }, []);

  return (
    <div className="App">
        <h2>Lottery Contract</h2>
        {manager?.length && (<p>This contract is managed by {manager}</p>)}
        There are currently {players.length} people entered, competing to win {web3.utils.fromWei(balance, 'ether')} ether!
        <Footer />
    </div>
  );
}

export default App;