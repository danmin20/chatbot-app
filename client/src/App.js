import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { RobotOutlined } from "@ant-design/icons";
import Chatbot from "./components/Chatbot";
const { Title } = Typography;

const Titlediv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <Titlediv>
        <Title level={2} style={{ fontWeight: "100" }}>
          CHAT BOT APP&nbsp;
          <RobotOutlined />
        </Title>
      </Titlediv>
      <Content>
        <Chatbot />
      </Content>
    </div>
  );
}

export default App;
