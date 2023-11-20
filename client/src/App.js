import Main from "./components/Main";
import Reqbody from "./components/Reqbody";
import Reqparams from "./components/Reqparams";
import Reqquery from "./components/Reqquery";

function App() {
  return (
    <div className="App">
      <Main />
      <Reqparams />
      <Reqquery />
      <Reqbody />
    </div>
  );
}

export default App;
