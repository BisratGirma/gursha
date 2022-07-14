import logo from './logo.svg';
import './App.css';

const Message = () => {
  return <div className='message'>
    <h1>Login to your account</h1>
    <p>don't have an account? <a href='#'>create a new account here</a></p>
  </div>
}
const Input = () => {
  return <div className='forms'>
  <form className='inputs'>
    <input type='email' id='email' placeholder='email or phone'></input>
    <input type='password' id='password' placeholder='password'></input>
  </form>
  <p><a href='#'>forgot password?</a></p>
  </div>
}
const Button = () => {
  return <div className='buttons'>
    <button className='log'>sign in</button>
  </div>
}

const App = () => {
  return (
    <div className="App">
      <div className='auth'>
      <Message />
      <Input />
      <Button />
      </div>
    </div>
  );
}

export default App;
