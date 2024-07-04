import './App.css';
import NavBar from './components/NavBar/NavBar';
import PageForm from './components/PageForm/PageForm';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ShowPage from './containers/ShowPage/ShowPage';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/PageForm" element={<PageForm/>}/>
        <Route path="page/:id" element={<ShowPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>

    </>
  );
};

export default App;
