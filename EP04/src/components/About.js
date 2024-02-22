import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

  constructor(props){
    super(props);

    // console.log('parent constructor')
  }


  componentDidMount(){
    // console.log('parent mount');
  }

  render() {

    // console.log('parent render')
    return (
      <div>
        <h1>About us page</h1>
        <h2>Welcome to the food ordering page</h2>
        <UserClass name={"first"} />
      </div>
    );
  }
}

export default About;
