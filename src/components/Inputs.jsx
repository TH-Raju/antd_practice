import { Input } from "antd";
import { UserOutlined, SecurityScanFilled } from "@ant-design/icons";

const Inputs = () => {
  return (
    <div>
      <Input
        placeholder="Name"
        maxLength={4}
        allowClear
        // disabled
        prefix={<UserOutlined />}
      />{" "}
      <br /> <br />
      <Input
        placeholder="Password"
        prefix={<SecurityScanFilled />}
        type="password"
      />
    </div>
  );
};

export default Inputs;
