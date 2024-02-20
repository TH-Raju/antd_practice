import { Alert, Button, message } from "antd";
import { useState } from "react";

const AlertMsg = () => {
  const [showAlert, setShowAlert] = useState(false);
  const onSub = () => {
    message.success("Login successful");
    message.warning("Login failed");
    setTimeout(() => {
      setShowAlert(true);
    }, 2000);
  };
  return (
    <div>
      <h1>AlertMsg</h1>
      {showAlert && (
        <Alert type="error" description=" There was an error" closable />
      )}
      <Button type="primary" onClick={onSub}>
        Success
      </Button>
    </div>
  );
};

export default AlertMsg;
