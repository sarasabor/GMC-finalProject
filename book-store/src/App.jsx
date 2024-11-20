import AllBooks from "./components/AllBooks";
import BooksContextProvider from "./context/BooksContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

//* Importing the routes
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BooksContextProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}  />
            <Route path='/books' element={<AllBooks  />} />
          </Routes>
      </BrowserRouter>
    </BooksContextProvider>
  );
}

export default App;
