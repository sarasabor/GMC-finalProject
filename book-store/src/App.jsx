import AllBooks from "./components/AllBooks";
import BooksContextProvider from "./context/BooksContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//* Importing the routes
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BooksByGenre from "./components/BooksByGenre";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App() {

  return (
    <BooksContextProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}  />
            <Route path='/books' element={<AllBooks  />} />
            <Route path='/books/genre/:genre' element={<BooksByGenre />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm/>} />
          </Routes>
        <Footer /> 
      </Router>
    </BooksContextProvider>
  );
}

export default App;
