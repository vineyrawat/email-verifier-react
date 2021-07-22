import React from "react";
import { Button, Form, Input, InputGroup } from "./styles";

function EmailInput({ onSubmit, loading }) {
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Input placeholder="Enter your email" type="text" name="email" />
        <Button disabled={loading ? true : false}>
          {loading ? "Loading..." : "Check email"}
        </Button>
      </InputGroup>
    </Form>
  );
}

export default EmailInput;
