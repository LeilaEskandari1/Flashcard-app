
import './App.css';
import Flashcard from './component/flashCard/Flashcard'
import { useState,useEffect } from 'react';
import AddFlashCardForm from './component/addFlashCardForm/AddFlashCardForm';
function App() {
  const [showForm,setShowForm ]=useState(false);
   const [flashCards,setFlashCards ]=useState([]);
  useEffect(() => {
  fetch('http://localhost:5000/flashcards')
    .then(res => res.json())
    .then(data => setFlashCards(data))
    .catch(err => console.error(err));
}, []);

const [currentIndex, setCurrentIndex] = useState(0);
const [flipped, setFlipped] = useState(false);   
const [isTransitioning, setIsTransitioning] = useState(false); 
const handleNext = () => {
  if (currentIndex < flashCards.length - 1) {
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
const handleAddCard = (newCard) => {
    fetch('http://localhost:5000/flashcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCard),
    })
      .then((res) => res.json())
      .then((addedCard) => {
        setFlashCards((prev) => [...prev, addedCard]);
        setShowForm(false);
      });
  };


 
 return (
 <div className="App">
  
 <h1>Flashcard App</h1>
  <button
       onClick={() => setShowForm((prev) => !prev)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
      >
         {showForm ? 'close form' : 'add flash card'}


      </button>
       {showForm && <AddFlashCardForm onAdd={handleAddCard} />}

{!showForm && 
<>
<Flashcard
    question={flashCards[currentIndex]?.question}
    answer={flashCards[currentIndex]?.answer}
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
          disabled={currentIndex === flashCards.length - 1}
        >
          Next
        </button>
      </div></>








}
  



    


 </div>
  );
}

export default App;
