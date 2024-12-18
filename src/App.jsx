import AlertMsg from "./components/AlertMsg";
import Buttons from "./components/Button";
import DatePickers from "./components/DatePicker";
import Forms from "./components/Forms";
import Inputs from "./components/Inputs";
import Selects from "./components/Selects";
import Spins from "./components/Spins";
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
      <br />
      <DatePickers />
      <br />
      <Spins />
      <br />
    </div>
  );
};

export default App;
