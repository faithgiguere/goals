import React from "react";

const GoalForm = props => {
  return (
    <div className="goal_form">
      <form onSubmit={props.onCreate}>
        <span>Goal Name: </span>
        <input type="text" name="goalName" />
        <button className="btn btn-warning btn-sm m-2">Submit</button>
        <button
          className="btn btn-outline-secondary btn-sm m-2"
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default GoalForm;
