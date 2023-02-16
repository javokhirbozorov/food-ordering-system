import React, { Component } from 'react'

export  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>; // fallback UI
      }
      return this.props.children;
    }
  }
