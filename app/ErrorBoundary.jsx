import React from "react";
class ErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {

    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  