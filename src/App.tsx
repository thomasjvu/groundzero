import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Listing from './pages/Listing';
import Post from './pages/Post'
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';

// import ListingDetails from './components/ListingDetails';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/post" element={<Post />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<Listing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
