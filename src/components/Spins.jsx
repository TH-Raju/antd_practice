import { Button, Spin } from "antd";
import { useState } from "react";

const Spins = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <h1>Spins</h1>
      <Spin spinning={loading}></Spin>
      <Button
        onClick={() => {
          setLoading((prv) => !prv);
        }}
      >
        Toggle
      </Button>

      <Spin spinning={loading}>
        <p>1 to p</p>
        <p>p to 1</p>
        <p>p to p</p>
      </Spin>
    </div>
  );
};

export default Spins;
