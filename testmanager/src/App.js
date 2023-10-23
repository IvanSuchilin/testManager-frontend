import Header from "./components/Header";
import Footer from "./components/Footer";
import ListSpecimenComponent from "./components/ListSpecimenComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
<>
      <BrowserRouter>
        <Header />
          <Routes>
            {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListSpecimenComponent />}></Route>
              <Route path='/specimens' element = { <ListSpecimenComponent /> }></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
