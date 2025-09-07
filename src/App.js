
import './App.css';
import Flashcard from './component/flashCard/Flashcard'
import { useState } from 'react';

function App() {
  const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
];

const [currentIndex, setCurrentIndex] = useState(0);
const [flipped, setFlipped] = useState(false);   
const [isTransitioning, setIsTransitioning] = useState(false); 
const handleNext = () => {
  if (currentIndex < flashcards.length - 1) {
    setFlipped(false); // Flip back to question side
      setIsTransitioning(true); // Hide card

    setTimeout(() => {
       setCurrentIndex((prev) => prev + 1);
       setIsTransitioning(false); // Show new card
    }, 100); // Match your CSS transition duration
  }
};

const handlePrevious = () => {
  if (currentIndex > 0) {
    setFlipped(false);
    setIsTransitioning(true); // Hide card


    setTimeout(() => {
         setCurrentIndex((prev) => prev - 1);
         setIsTransitioning(false); // Show new card
    }, 100);
  }
};

  return (
 <div className="App">
 <h1>Flashcard App</h1>

  <Flashcard
    question={flashcards[currentIndex].question}
    answer={flashcards[currentIndex].answer}
    flipped={flipped}
    setFlipped={setFlipped}
     hidden={isTransitioning}

  />

  
 <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>


 </div>
  );
}

export default App;
