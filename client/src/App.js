import Reqbody from "./components/Reqbody";
import Useparams from "./components/Useparams";
import Reqquery from "./components/Reqquery";

function App() {
  return (
    <div className="App">
      <Useparams />
      <Reqquery />
      <Reqbody />
    </div>
  );
}

export default App;
