import React from "react";
import Goal from "./goal";

class GoalList extends React.Component {
  render() {
    return (
      <div class="goal_list">
        <button className="btn btn-primary bt-sm m-2">New Goal</button>
        <button className="btn btn-primary b-sm m-2">Delete All</button>

        {this.props.data.map(goal => (
          <Goal key={goal.id} name={goal.name} />
        ))}
      </div>
    );
  }
}
export default GoalList;
