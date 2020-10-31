import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "请撰写一篇关于你喜欢的 DOM 元素的文章.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("提交的文章: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
ReactDOM.render(<EssayForm />, document.getElementById("root"));
