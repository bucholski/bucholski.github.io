import DefaultButton from './components/DefaultButton';
import Footer from './components/Footer';
import Header from './components/Header'
import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="flex-column">
      <Header score={score} />
      <BrowserRouter>
        <Routes>
          <Route path="/learning_projects/rps-react-prod" element={<Step1 setChoice={setChoice} />}>
          </Route>
          <Route path="/learning_projects/rps-react-prod/result" element={<Step2  gesture={choice} score={score} setScore={setScore} />}>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Step1 setChoice={setChoice} /> */}
      {/* <Step2 choice={choice} score={score} setScore={setScore} /> */}

      <DefaultButton text="rules" extraClass="rules-btn" />
      <Footer />
    </div>
  );
}

export default App;
