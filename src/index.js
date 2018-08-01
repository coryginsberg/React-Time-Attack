import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
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

// function GuestGreeting(props) {
//   return <h1>Press START to play!</h1>;
// }

function Greeting(props) {
  const isGameStart = props.isGameStart;
  if (!isGameStart) {
    return <WelcomeText />;
  }
}

function StartGame(props) {
  return (
    <button onClick={props.onClick}>
      START
    </button>
  );
}

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

