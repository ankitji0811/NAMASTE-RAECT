import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo : {
            name: "dummy",
            location : "default",
        }
    }
    // console.log(this.props.name + "constructor");
  }

 async componentDidMount() {

    const data = await fetch("https://api.github.com/users/ankitji0811");

    const json = await data.json();

    this.setState({
        userInfo:json
    })

    // console.log(this.props.name + "component mount");
  }

  render() {
    // console.log(this.props.name + "render");

    const {name, location } = this.state.userInfo
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
