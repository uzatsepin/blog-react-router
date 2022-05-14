import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import SinglePage from './pages/SinglePage';
import CreatePage from './pages/CreatePage';
import LoginPage from './pages/LoginPage';
import RequireAuth from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

function App() {
  return (
    <>
    <AuthProvider>
        <Routes >
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path='about' element={<AboutPage/>} />
            <Route path='posts' element={<PostPage/>} />
            <Route path='post' element={<Navigate to='/posts' replace/>} />
            <Route path='posts/:id' element={<SinglePage/>} />
            <Route path='posts/new' element={
              <RequireAuth>
                <CreatePage />
              </RequireAuth>
            } />
            <Route path='/posts/login' element={<LoginPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App;
