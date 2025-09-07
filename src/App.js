
import './App.css';
import Flashcard from './component/flashCard/Flashcard'

function App() {
    const sampleCard = {
    question: "What is the capital of France?",
    answer: "Paris"
  };


  return (
 <div className="App">

  <Flashcard question={sampleCard.question} answer={sampleCard.answer}/>
 </div>
  );
}

export default App;
