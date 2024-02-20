import AlertMsg from "./components/AlertMsg";
import Buttons from "./components/Button";
import Forms from "./components/Forms";
import Inputs from "./components/Inputs";
import Selects from "./components/Selects";
import Tables from "./components/Tables";

const App = () => {
  return (
    <div>
      <Buttons />
      <br />
      <br />
      <Inputs />
      <br />
      <br />
      <Selects />
      <br />
      <br />
      <Forms />
      <br />
      <br />
      <Tables />
      <br />
      <br />
      <AlertMsg />
    </div>
  );
};

export default App;
