import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 600px;
  margin: 0 50px;
  border: 3px solid black;
  border-radius: 7px;
  flex: 1;
  flex-direction: column;
  display: flex;
`;

const Chat = styled.div`
  flex: 0.9;
  overflow: auto;
`;

const InputBox = styled.input`
  flex: 0.1;
  border: 0px solid black;
  border-top-width: 1px;
  padding: 0 15px;
  font-size: 1rem;
`;

export default () => {
  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("Type something!");
      }
      // request to textQuery route
      e.target.value = "";
    }
  };
  return (
    <Wrapper>
      <Chat></Chat>
      <InputBox
        placeholder="Send a message..."
        onKeyPress={keyPressHandler}
        type="text"
      />
    </Wrapper>
  );
};
