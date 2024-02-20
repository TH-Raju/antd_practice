import { Form, Input, Button } from "antd";
import { KeyOutlined, MailOutlined } from "@ant-design/icons";

const Forms = () => {
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <div>
      <br />
      <br />
      <h1>Forms</h1>
      <Form onFinish={onFinish}>
        <Form.Item label="Email">
          <Input
            placeholder="Enter Your Email"
            required
            prefix={<MailOutlined />}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            prefix={<KeyOutlined />}
            required
            placeholder="Type your Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forms;
