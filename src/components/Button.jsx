import { Button } from "antd";
import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";

const Buttons = () => {
  const [loading, setLoading] = useState(false);
  const onButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Button type="primary" block>
        Primary
      </Button>
      <Button type="link">Primary</Button>
      <Button type="dashed" block>
        Primary
      </Button>

      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={onButton}
        style={{
          backgroundColor: "orange",
        }}
        block
      >
        Load
      </Button>
    </div>
  );
};

export default Buttons;
