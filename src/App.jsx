import Topnav from "./Components/Topnav/topnav"
import Sidenav from "./Components/Sidenav/sidenav"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import Announce from "./Components/Announce/Announce";
import Task from "./Components/Task/Task";
import Chats from "./Components/Chats/Chats";
import Result from "./Components/Result/Result";
import Support from "./Components/Support/Support";
import Resources from "./Components/Resources/Resources";
import Workload from "./Components/Workload/Workload";
import Exams from "./Components/Exams/Exams";
import Leaves from "./Components/Leaves/Leaves";

function App() {

  return (
    <Router>
      <Topnav />
      <Sidenav />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/announce' element={<Announce />}></Route>
        <Route path='/task' element={<Task />}></Route>
        <Route path='/chats' element={<Chats />}></Route>
        <Route path='/leave' element={<Leaves />}></Route>
        <Route path='/results' element={<Result />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/workload' element={<Workload />}></Route>
        <Route path='/exams' element={<Exams />}></Route>
        <Route path='/support' element={<Support />}></Route>

      </Routes>
    </Router>
  )
}
export default App