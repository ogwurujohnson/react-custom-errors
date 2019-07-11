import React, { Component } from 'react';
import styled from 'styled-components';
import warning from '../assets/warning.svg';
import {statusCodes} from './data'; 

export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      message: '',
    }
  }

  componentDidMount() {
    if(this.props.code) {
      if(statusCodes[this.props.code]) {
        this.setState({message: statusCodes[this.props.code]})
      } else {
        this.setState({message: 'Error unknown'})
      }
    } else {
      this.setState({message: 'Error unknown'})
    }
    
  }
  
  render(props) {
    return (
      <ErrorWrapper>
        <img src={warning} alt="" />
        <ErrorCode>{this.props.code}</ErrorCode>
        <ErrorMessage>{this.state.message}</ErrorMessage>
      </ErrorWrapper>
    )
  }
}


const ErrorWrapper = styled.div`
  position: relative;
  text-align: center;
  background: teal;
  color: white;
  min-height: 750px;
  display: flex;
  flex-direction: column;
`;

const ErrorCode = styled.h3`
  position: absolute;
  font-size: 150px;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorMessage = styled.h3`
  position: absolute;
  font-size: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;