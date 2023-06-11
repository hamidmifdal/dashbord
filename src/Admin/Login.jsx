import React, { useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Msgerror from './Msgerror'

const Login = () => {
  const handle = () => {
    // Perform login logic here

    // If login fails, set the error message
    Msgerror('Invalid username or password');
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ishow , isnotshow] = useState(false)
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      // window.open('https://admin.xngmi.shop/dashborad','_self')
      navigate(`/dashbord/68525dafbba5bb602399d069cdd04e90/others/${username}`);
      
      } else {
        isnotshow(true)
      }
    }
    
  return (
    <>
    <div className="text-center">
      {ishow && <Msgerror message={'heelo'}/>}
    </div>
    <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}}>
        <div className="card w-50">
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handle} type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
