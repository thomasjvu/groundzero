import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Post from './pages/Post';

import Companies from './pages/Companies';
import Company from './pages/Company'; 

import Listing from './pages/Listing';
import Jobs from './pages/Jobs';

import Terms from './pages/Legal/Terms';
import Privacy from './pages/Legal/Privacy';
import Disclaimers from './pages/Legal/Disclaimers';

import NotFound from './pages/Error/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = (): JSX.Element => {
    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/companies/:id" element={<Company />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/jobs/:id" element={<Listing />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/disclaimers" element={<Disclaimers />} />
                    <Route path="/terms" element={<Terms />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
