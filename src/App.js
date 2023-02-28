import "./styles.css";

import React from "react";

export default class App extends React.Component {
  state = {
    otp: ""
  };
  componentDidMount() {
    alert('bbbb')
    if ("OTPCredential" in window) {
      const ac = new AbortController();

      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal
        })
        .then((otp) => {
          alert(otp)
          this.setState({ otp: otp.code });
          ac.abort();
        })
        .catch((err) => {
          alert(err);
          ac.abort();
        });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Your OTP is: {this.state.otp}</h2>
      </div>
    );
  }
}
