import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isGameStart: false};
  }

  handleLoginClick() {
    this.setState({isGameStart: true});
  }

  handleLogoutClick() {
    this.setState({isGameStart: false});
  }
  

  render() {
    const isGameStart = this.state.isGameStart;
    let button;

    button = <StartGame onClick={this.handleLoginClick} />;
    

    return (
      <div>
        <Greeting isGameStart={isGameStart} />
        {button}
      </div>
    );
  }
}

function WelcomeText(props) {
  return <h1>Welcome to Time Attack!</h1>;
}

function RunGame(props) {
  return (
    <h1>Game starts in 3</h1>
  );
}

function Greeting(props) {
  const isGameStart = props.isGameStart;
  if (!isGameStart) {
    return <WelcomeText />;
  } else {
    return <RunGame />;
  }
}

function StartGame(props) {
  const style = this.state.isGameStart ? {display : 'none'} : {};

  return (
    <button onClick={props.onClick} style={style}>
      START
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

