
import { Routes, Route } from 'react-router-dom';
import { EmployeeList } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
      </Routes>
    </>

  )
}

export default App
