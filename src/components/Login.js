import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login({ setLoggedInn }) {
  const logInHandler = () => {
    setLoggedInn(true);
    alert("Logged inn successfully");
  };
  return (
    <div>
      <Form name="normal_login" className="login-form">
        <h2>Login Form</h2>
        {/* username */}
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please enter username",
            },
          ]}
        >
          <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        {/* for password */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please Enter Password",
            },
          ]}
        >
          <Input
            placeholder="Password"
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={logInHandler}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
