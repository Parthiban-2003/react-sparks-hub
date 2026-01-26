import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  function handleSubmition(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!email.includes('@')) {
      setError('Enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be greater than 6 characters');
      return;
    }

    setError('');
    alert('Login Successfully');
  }

  return (
    <>
      <h1>Login Form Error Messages</h1>

      <form onSubmit={handleSubmition}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default LoginForm;
