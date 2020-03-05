import React, { Component } from "react";
import styled from "styled-components";
import request from "superagent";
import { breakpoint, fontSize } from "../utils/styled";

const Form = styled.form`
  ${fontSize(18, 24)}
  text-align: left;
  margin-top: 14%;
  max-width: 60%;
  line-height: 2;
  color: #202123;

  ${breakpoint.down`max-width: 100%;`}
`;

const CopyButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  font-size: 17px;
  border-bottom: 1px solid #74747b;
  color: #74747b;
  cursor: pointer;
  transition: opacity: 220ms ease;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const Intro = styled.p`
  text-align: left;
  line-height: 1.5;
`;

const Label = styled.p`
  margin: 0;
  padding-top: 3vw;
`;

const Input = styled.span`
  ${fontSize(18, 24)}
  font-family: "Inter", sans-serif;
  font-weight: normal;
  border-bottom: 1px dashed #74747b;
  display: inline-block;
  line-height: 1.5;
  outline: 0;

  &:empty::before {
    content: attr(placeholder);
    color: #74747b;
  }
`;

const Textarea = styled.div`
  ${fontSize(18, 24)}
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  display: block;
  background-color: #fff;
  resize: none;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  line-height: 1.5;
  margin-top: 3vw;
  border-bottom: 1px solid transparent;
  margin-bottom: 5px;

  &:empty {
    display: inline-block;
    width: auto;
    border-bottom: 1px dashed #74747b;
    margin-bottom: 0;
  }

  &:empty::before {
    content: attr(placeholder);
    color: #74747b;
  }

  &:placeholder {
    color: #74747b;
  }
`;

const Actions = styled.div`
  margin-top: 12vh;
`;

const Button = styled.button`
  ${fontSize(24, 32)}
  display: inline-block;
  color: #2c2c2c;
  background: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 32px;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  padding: 12px 40px;

  &:hover {
    color: #fff;
    background: #2c2c2c;
  }

  &[disabled] {
    opacity: 0.3;
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCopy = this.handleCopy.bind(this);

    this.state = {
      copied: false,
      sending: false,
      success: false,
      error: false,
      name: "",
      location: "",
      body: "",
      email: ""
    };
  }

  handleCopy(e) {
    e.preventDefault();

    let el = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = "alexanderbyrne@gmail.com";
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);

    this.setState({
      copied: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, location, body, email } = this.state;

    this.setState({
      sending: true
    });

    request
      .post("https://formspree.io/hello@alexanderbyrne.com")
      .send({
        name,
        email,
        location,
        body
      })
      .end((error, response) => {
        if (error) {
          this.setState({
            sending: false,
            error: true
          });

          return;
        }

        this.setState({
          sending: false,
          success: true
        });
      });
  }

  handleKeyUp(e) {
    const target = e.target;
    const value =
      target.tagName === "SPAN" ? target.textContent : target.textContent;
    const name = target.getAttribute("name");

    console.log(value);

    this.setState({
      [name]: value
    });
  }

  handleKeyDown(e) {
    const target = e.target;
    const name = target.getAttribute("name");
    const key = e.key;

    if (key === "Enter" && target.tagName === "SPAN") {
      if (name === "email") {
        this.handleSubmit(e);
      }

      e.preventDefault();
    }
  }

  render() {
    const {
      copied,
      sending,
      success,
      name,
      location,
      body,
      email
    } = this.state;
    const isValid =
      name.trim() !== "" &&
      location.trim() !== "" &&
      body.trim() !== "" &&
      email.trim() !== "";

    return (
      <div>
        <h1>Have a project or opportunity of your own?</h1>
        <Intro>
          Use the form below or{" "}
          <CopyButton type="button" disabled={copied} onClick={this.handleCopy}>
            {copied
              ? "copy my email address (copied!)"
              : "copy my email address"}
          </CopyButton>{" "}
          and send me a message.
        </Intro>
        <Form onSubmit={this.handleSubmit}>
          Hi Alex, <br />
          <Label>
            I'm{" "}
            <Input
              name="name"
              contentEditable="true"
              placeholder="Milhouse Van Houten"
              onKeyDown={this.handleKeyDown}
              onKeyUp={this.handleKeyUp}
            />{" "}
            from{" "}
            <Input
              name="location"
              contentEditable="true"
              placeholder="Springfield"
              onKeyDown={this.handleKeyDown}
              onKeyUp={this.handleKeyUp}
            />{" "}
            reaching out about an opportunity to:
          </Label>
          <div>
            <Textarea
              name="body"
              contentEditable
              onInput={this.handleKeyUp}
              placeholder="Win Lisa's love"
              value={body}
            ></Textarea>
          </div>
          <Label>You can reach me via email on:</Label>
          <Input
            name="email"
            contentEditable="true"
            placeholder="thrillhouse@gmail.com"
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleKeyUp}
          />
          <Actions>
            {success ? (
              <p>Thanks! I'll get back to you shortly.</p>
            ) : (
              <Button type="submit" disabled={sending || !isValid}>
                Send message
              </Button>
            )}
          </Actions>
        </Form>
      </div>
    );
  }
}

export default Contact;
