import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path = '/home' element={<Home/>}></Route>
          <Route exact path = '/detail/:id' element={<Details/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
