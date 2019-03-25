import React from "react";
import Goal from "./goal";

class GoalList extends React.Component {
  render() {
    return (
      <div className="goal_list">
        <button
          className="btn btn-outline-warning bt-sm m-2"
          onClick={this.props.onClickNewGoal}
        >
          New Goal
        </button>
        <button
          className="btn btn-outline-danger b-sm m-2"
          onClick={this.props.onClickDeleteAll}
        >
          Delete All
        </button>

        {this.props.data.map(goal => (
          <Goal
            key={goal.id}
            goalId={goal.id}
            name={goal.name}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
export default GoalList;
