import Header from "./components/Header";
import Footer from "./components/Footer";
import ListSpecimenComponent from "./components/ListSpecimenComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ListProgramComponent from "./components/ListProgramComponent";
import SpecimenComponent from "./components/SpecimenComponent";
import ProgramComponent from "./components/ProgramComponent";


function App() {
  return (
<>
      <BrowserRouter>
        <Header />
          <Routes>
            {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListSpecimenComponent />}></Route>
              <Route path='/specimens' element = { <ListSpecimenComponent /> }></Route>
              <Route path='/program' element = { <ListProgramComponent /> }></Route>
              <Route path='/program/:id/add-specimen' element = { <SpecimenComponent /> }></Route>
              <Route path='/add-program' element = { <ProgramComponent /> }></Route>
              <Route path='/edit-program/:id' element = { <ProgramComponent /> }></Route>
              <Route path='/edit-specimen/:id' element = { <SpecimenComponent/> }></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
