import { transfer } from "./services/MetaMaskService";
import { useState } from "react";
function App() {
  const [balance, setBalance] = useState<string>("");
  const [toAccountAddress, setToAccountAddress] = useState<string>("");
  const [fromAccountAddress, setFromAccountAddress] = useState<string>("");


  function handleTransfer() {
    transfer(fromAccountAddress, toAccountAddress, balance).then();
  }

  return (
    <main>
      <div className="input-container">
        <div className="block-input">
          <label>To</label>
          <input onChange={(e) => setToAccountAddress(e.target.value)} className="input" type="text" />
        </div>
        <div className="block-input">
          <label>From</label>
          <input onChange={(e) => setFromAccountAddress(e.target.value)} className="input" type="text" />
        </div>
        <div className="block-input">
          <label>Value</label>
          <input onChange={(e) => setBalance(e.target.value)} className="input" type="text" />
        </div>
        <div className="button-container">
          <button onClick={handleTransfer}>Transfer</button>
        </div>
      </div>
    </main>
  );
}

export default App;
