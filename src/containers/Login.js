import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login({ setLoggedInn }) {
  //get data from input by user
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

  //handle input data
  const handleinput = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(data);
  };

  //handle whether user is logged inn or not
  const logInHandler = () => {
    if (inputData.username && inputData.password) {
      setLoggedInn(true);
      alert("Logged inn successfully");
      console.log(inputData);
    }
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
            onChange={handleinput}
            name="username"
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
            onChange={handleinput}
            name="password"
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
