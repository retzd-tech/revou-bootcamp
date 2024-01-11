import logo from './logo.svg';
import './Greeting.component.css';

const GreetingComponent = (props) => {
  const { balance, bankAccount } = props;
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello RevoU React</p>
      <p>Bank Account : {bankAccount}</p>
      <p>Balance : {balance}</p>
    </>
  );
};

export default GreetingComponent;
