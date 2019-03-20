import React from "react";
import GoalList from "./components/goalList";
import Header from "./components/header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/goals/")
      .then(response => response.json())
      .then(goals => this.setState({ goals }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h4>
          <GoalList data={this.state.goals} />
        </h4>
      </React.Fragment>
    );
  }
}

export default App;
