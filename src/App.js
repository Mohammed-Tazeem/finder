import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './Components/layout/Alert';

function App() {

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between min-h-screen '>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/*' element={<NotFound />} />

              </Routes>
            </main>
            <Footer />
          </div>


        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
