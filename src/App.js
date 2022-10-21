import "./App.css";
import { createUseStyles } from "react-jss";
import Counter from "./Components/Counter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
//css
const styles = createUseStyles({
  heading: {
    color: "red",
  },
});

function App() {
  //js
  const css = styles();
  let name = "Masuma";
  console.log(`Hello ${name}`);

  //html
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<Counter styleCss={css} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
