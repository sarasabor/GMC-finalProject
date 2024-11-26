import AllBooks from "./components/AllBooks";
import BooksContextProvider from "./context/BooksContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//* Importing the routes
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BooksByGenre from "./components/BooksByGenre";
import SignupForm from "./components/SignupForm";

function App() {

  return (
    <BooksContextProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}  />
            <Route path='/books' element={<AllBooks  />} />
            <Route path='/books/genre/:genre' element={<BooksByGenre />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Routes>
        <Footer /> 
      </BrowserRouter>
    </BooksContextProvider>
  );
}

export default App;
