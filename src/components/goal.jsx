import React from "react";

class Goal extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.name} </span>
        <button className="btn btn-outline-secondary btn-sm m-2">Edit</button>
        <button
          id={this.props.goalId}
          className="btn btn-secondary btn-sm m-2"
          onClick={this.props.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default Goal;
