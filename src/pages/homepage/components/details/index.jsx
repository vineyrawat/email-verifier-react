import React from "react";
import { Container, ListItem, Title } from "./styles";
import { AiFillCheckCircle, AiFillExclamationCircle } from "react-icons/ai";

const Item = ({ title, valid }) => {
  return (
    <ListItem>
      {valid ? (
        <AiFillCheckCircle className="icon" color="#00B65C" />
      ) : (
        <AiFillExclamationCircle className="icon" color="#ee3645" />
      )}
      <Title>{title}</Title>
    </ListItem>
  );
};

function Details({ data }) {
  return (
    <>
      <p>
        <span style={{ color: "gray" }}>Email Address:</span>{" "}
        {data.email_address}
      </p>
      <Container>
        <Item
          valid={data.domain}
          title={`Domain: ${data.domain || "Invalid"}`}
        />
        <Item
          valid={data.deliverable}
          title={data.deliverable ? "Deliverable" : "Undeliverable"}
        />
        <Item valid={!data.spam} title={data.spam ? "Spammed" : "Not spam"} />
        <Item
          valid={data.valid_syntax}
          title={data.valid_syntax ? "Valid syntax" : "Invalid syntax"}
        />
        <Item
          valid={data.webmail}
          title={data.webmail ? "Webmail" : "No webmail"}
        />
        <Item
          valid={data.disposable}
          title={data.disposable ? "Disposable" : "No disposable"}
        />
      </Container>
    </>
  );
}

export default Details;
