import React from "react";

class Goal extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <button className="btn btn-secondary btn-sm m-2">Edit</button>
        <button className="btn btn-secondary btn-sm m-2">Delete</button>
      </div>
    );
  }
}
export default Goal;
