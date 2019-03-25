import React, { Component } from "react";
import GoalList from "./components/goalList";
import Header from "./components/header";
import GoalForm from "./components/goalForm";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
  headers: { Authorization: "Basic ZmFpdGg6ZmFpdGg=" }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      showNewGoalForm: false
    };
  }
  componentDidMount() {
    api.get(`/goals/`).then(response => {
      const goals = response.data;
      this.setState({ goals });
    });
  }

  handleClickNewGoal = () => {
    this.setState({ showNewGoalForm: true });
  };

  handleCreate = e => {
    e.preventDefault();
    const goal = { name: e.target.elements.goalName.value };

    api.post(`/goals/`, goal).then(response => {
      let goals = this.state.goals.concat(response.data);
      this.setState({ goals });
    });
  };

  handleDelete = e => {
    e.preventDefault();
    const goalId = e.target.id;

    api.delete(`/goals/${goalId}`).then(response => {
      let goals = this.state.goals.filter(goal => goal.id !== Number(goalId));
      this.setState({ goals });
    });
  };

  handleDeleteAll = e => {
    e.preventDefault();
    this.state.goals.map(goal => {
      api.delete(`/goals/${goal.id}`).then(response => {
        let goals = this.state.goals.filter(g => g.id !== goal.id);
        this.setState({ goals });
      });
    });
  };

  handleCancel = e => {
    this.setState({ showNewGoalForm: false });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <h4>
          <GoalList
            data={this.state.goals}
            onClickNewGoal={this.handleClickNewGoal}
            onClickDeleteAll={this.handleDeleteAll}
            onDelete={this.handleDelete}
          />
        </h4>
        {this.state.showNewGoalForm ? (
          <GoalForm onCreate={this.handleCreate} onCancel={this.handleCancel} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
