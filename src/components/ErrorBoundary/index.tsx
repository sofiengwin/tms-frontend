import React from "react";

export default class MyErrorBoundary extends React.Component<{}> {
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: any, info: any) {
    this.logErrorToServices(error.toString(), info);
  }
  // A fake logging service 😬
  logErrorToServices = console.log;
  render() {
    console.log(this.state.errorMessage);
    if (this.state.errorMessage) {
      return (
        <div>
          <p>Something went wrong</p>
        </div>
      );
    }
    return this.props.children;
  }
}
