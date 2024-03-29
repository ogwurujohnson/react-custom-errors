import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from "react-router-dom";
import warning from "../assets/warning.svg";
import { statusCodes } from "./data";
import { MdKeyboardBackspace } from "react-icons/md";
import './ErrorPage.css';

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      message: ""
    };
  }

  static propTypes = {
    code: PropTypes.number.isRequired,
    customMessage: PropTypes.string,
    backgroundColor: PropTypes.string
  };

  static defaultPropTypes = {
    customMessage: "Error unknown",
    backgroundColor: "teal",
  }

  componentDidMount() {
    if (this.props.code) {
      if (statusCodes[this.props.code]) {
        this.setState({
          message: `Error: ${statusCodes[this.props.code]}`
        });
      } else {
        this.setState({
          message: "Error unknown"
        });
      }
    } else {
      this.setState({ message: "!!!!! Please provide a status code as prop for <ErrorPage />, check documentation !!!!!!" });
    }
  }

  // added the custom message prop code when i was taking an ice cream..lol

  render(props) {
    return (
      <ErrorWrapper backgroundColor={this.props.backgroundColor}>
        <Router>
          <img src={warning} alt="" />
          <ErrorCode>{this.props.code}</ErrorCode>
          <ErrorMessage>
            {this.props.customMessage
              ? this.props.customMessage
              : this.state.message}
          </ErrorMessage>
          <Link to={this.props.link}>
            <Button>
              <MdKeyboardBackspace size="2em" /> &nbsp;&nbsp; Go back to
              Homepage
            </Button>
          </Link>
        </Router>
      </ErrorWrapper>
    );
  }
}

const ErrorWrapper = styled.div`
  position: relative;
  text-align: center;
  ${props =>
    props.backgroundColor
      ? `background: ${props.backgroundColor};`
      : `background: teal;`}
  color: white;
  min-height: 750px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`;

const ErrorCode = styled.h3`
  position: absolute;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 5px;
  font-size: 150px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorMessage = styled.h3`
  max-width: 450px;
  min-width: 450px;
  width: 450px;
  word-wrap: break-word;
  position: absolute;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 20px;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  position: absolute;
  padding: 0.5rem 2rem;
  background: #024c4c;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.4em;
  font-weight: 300;
  text-align: center;
  top: 8%;
  left: 14%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
