import React, { Component } from "react";
import "./App.css";
// import MovieItem from "../MovieItem";

export default class App extends Component {
state = {
  name: null,
}

  componentDidMount() {
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id: "244208061265-kv8lp49ftipbvl02i7jhatqq0rigp1et",
        })
        .then(
          () => console.log("init OK"),
          () => console.log("init ERR")
        )
    })
  }



signIn= () =>{
  const _authOk = googleUser =>{
    this.setState({
      name:  googleUser.getBasicProfile().getName()
    })
   }
  const _authError = (user) => {console.log("Its Error")}

  const GoogleAuth = window.gapi.auth2.getAuthInstance()
  GoogleAuth.signIn({
    scope: "profile email",
  }).then(_authOk, _authError);

}

logOut= () =>{
  const GoogleAuth = window.gapi.auth2.getAuthInstance()
  GoogleAuth.signOut().then(
    () => console.log("Sign out ok"),
    () => console.log("Sign out Error")
  );

}
  render() {
    const {name} = this.state;
    return (
      <div className="App"> 
        {!!name && <p>Hello, {name}</p>}
        {!name && <button onClick={this.signIn}>Sign In</button>}
        {!!name && <button onClick={this.logOut}>log Out</button>}
   
        {/* <MovieItem title="I am title" rating="rating 5" /> */}
      </div>
    );
  }
}
