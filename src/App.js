import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Admin from './Admin/Admin' 
import Login from './Admin/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path='/dashbord/68525dafbba5bb602399d069cdd04e90/others/:username' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
