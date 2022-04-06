import { Form, Input, Button, Checkbox, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import "./Auth.css";
import Navbar from "../Navbar/Navbar";

const Auth = () => {
  const { handleLogin, handleSignUp, error, currentUser, handleLogOut } =
    useContext(authContext);
  console.log(currentUser);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const navigate = useNavigate();
  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if (regex.test(value)) {
      callback();
    } else {
      callback(
        "Password should contain at least one digit,one lower case,one upper case, 8 from the mentioned characters"
      );
    }
  }
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    if (isLoginForm) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };

  return currentUser === "" ? (
    <div className="mainestFifty">
      <Navbar />
      <div className="fifty">
        <div className="auth">
          <Row
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "100px",
            }}
          >
            <Col span={7}></Col>
            <Col span={10}>
              {error ? <Alert description={error} type="error" /> : null}

              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <h1 style={{ color: "white" }}>BMW ID LOGIN</h1>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                    {
                      type: "email",
                      message: "Is not valid email",
                    },
                  ]}
                >
                  <Input
                    style={{ width: "300px", height: "50px" }}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                    {
                      validator: validatePassword,
                    },
                  ]}
                >
                  <Input
                    style={{ width: "300px", height: "50px" }}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    style={{ width: "150px" }}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    {isLoginForm ? "Log In" : "Sign Up"}
                  </Button>
                  <br />
                  {isLoginForm ? (
                    <div style={{ color: "black", paddingTop: "10px" }}>
                      <span style={{ marginRight: "10px", color: "white" }}>
                        Or
                      </span>
                      <span
                        style={{ cursor: "pointer", color: "white" }}
                        onClick={() => setIsLoginForm(false)}
                      >
                        register now!
                      </span>
                    </div>
                  ) : (
                    <div style={{ color: "white", paddingTop: "10px" }}>
                      <>Have an account?</>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsLoginForm(true)}
                      >
                        Log in
                      </span>
                    </div>
                  )}
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="regis"></div>
      </div>
    </div>
  ) : (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="mainestLast1">
        <div className="last1">
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video
              width="100%"
              style={{ height: "100vh" }}
              autoPlay
              muted
              loop
              src="https://www.shopbmwusa.com/Images/PerformLanding/mpp-landing-hero-large.mp4?v=1"
            ></video>
            <button
              style={{ color: "white" }}
              className="logOut"
              onClick={() => handleLogOut()}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
