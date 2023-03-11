import { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(emailValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    setPasswordValid(passwordValue.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);

    setConfirmPasswordValid(confirmPasswordValue === password);
  };

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submition done!');
    } else {
      alert('Can't submit ');
    }
  };

  return (
    <div>
      <h1>account create</h1>
      <form>
        <div className={`form-group ${isEmailValid ? 'has-success' : 'has-error'}`}>
          <label>Email address:</label>
          <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
          {!isEmailValid && <div className="help-block">Please enter a valid email address.</div>}
        </div>
        <div className={`form-group ${isPasswordValid ? 'has-success' : 'has-error'}`}>
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
          {!isPasswordValid && <div className="help-block">Password must be at least 8 characters long.</div>}
        </div>
        <div className={`form-group ${isConfirmPasswordValid ? 'has-success' : 'has-error'}`}>
          <label>Confirm Password:</label>
          <input type="password" className="form-control" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          {!isConfirmPasswordValid && <div className="help-block">Passwords do not match.</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
Compose:
MinimisePop-outClose
