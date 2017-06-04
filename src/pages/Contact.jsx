import React, { Component } from 'react';
import styled from 'styled-components';
import request from 'superagent';
import { breakpoint, fontSize } from '../utils/styled';

const Form = styled.form`
  ${fontSize(24, 32)}
  text-align: left;
  margin-top: 16vh;
  max-width: 80%;
  font-family: 'FFTisaWebLight', serif;

  ${breakpoint.down`max-width: 100%;`}
`;

const Input = styled.span`
  border-bottom: 2px dotted #acadb7;
  display: inline-block;
  line-height: 1;
  outline: 0;
  
  &:empty::before {
    content: attr(placeholder);
    color: #acadb7;
  }
`;

const Textarea = styled.textarea`
  ${fontSize(24, 32)}
  display: block;
  height: 20vh;
  resize: none;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  font-family: 'FFTisaWebLight', serif;
  outline: 0;
`;

const Actions = styled.div`
  margin-top: 12vh;
`;

const Button = styled.button`
  ${fontSize(24, 32)}
  font-family: 'FFTisaWebLight', serif;
  color: #d3b98b;
  border: 0;
  background: none;
  border-bottom: 1px solid #d3b98b;
  padding: 0;
  margin: 0;
  
  &[disabled] {
    color: #ccc;
    border-color: #ccc;
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      sending: false,
      success: false,
      error: false,
      name: '',
      location: '',
      body: '',
      email: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, location, body, email } = this.state;

    this.setState({
      sending: true,
    });

    request
      .post('https://formspree.io/hello@alexanderbyrne.com')
      .send({
        name,
        email,
        location,
        body,
      })
      .end((error, response) => {
        if (error) {
          this.setState({
            sending: false,
            error: true,
          });

          return;
        }

        this.setState({
          sending: false,
          success: true,
        });
      });
  }

  handleKeyUp(e) {
    const target = e.target;
    const value = target.tagName === 'SPAN' ? target.textContent : target.value;
    const name = target.getAttribute('name');

    this.setState({
      [name]: value,
    });
  }

  handleKeyDown(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const key = e.key;

    if (key === 'Enter' && target.tagName === 'SPAN') {
      if (name === 'email') {
        this.handleSubmit(e);
      }

      e.preventDefault();
    }
  }

  render() {
    const { sending, success, name, location, body, email } = this.state;
    const isValid = name.trim() !== '' && location.trim() !== '' && body.trim() !== '' && email.trim() !== '';

    return (
      <Form onSubmit={this.handleSubmit}>
        Hi, I'm <Input name="name" contentEditable="true" placeholder="Milhouse Van Houten" onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} /> from <Input name="location" contentEditable="true" placeholder="Springfield" onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} /> reaching out about an opportunity to:
        <Textarea name="body" onChange={this.handleKeyUp} placeholder="Describe the opportunity here..." value={body} />
        You can reach me via email on:<br />
        <Input name="email" contentEditable="true" placeholder="milhouse@gmail.com" onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} />
        <Actions>
          {success ? <p>Thanks! I'll get back to you shortly.</p> : <Button type="submit" disabled={sending || !isValid}>Send</Button> }
        </Actions>
      </Form>
    );
  }
}

export default Contact;
