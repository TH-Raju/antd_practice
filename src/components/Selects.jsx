import { Select } from "antd";
const Selects = () => {
  const fruits = ["banana", "Mango", "Orange"];
  return (
    <div>
      <p>Selects</p>
      <p>Your Favorite Food</p>
      <Select placeholder="select" mode="multiple" style={{ width: "50%" }}>
        {fruits.map((fruit) => (
          <Select.Option key={fruit}>{fruit}</Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default Selects;
