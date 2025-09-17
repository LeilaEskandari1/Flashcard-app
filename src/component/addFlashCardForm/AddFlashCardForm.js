import { useState } from "react";
import './AddFlashCardForm.css'
function AddFlashCardForm({ onAdd }){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [id, setID] = useState("");
   const handleSubmit=(e)=>{
       e.preventDefault();
    if (!question || !answer) return;
    const newCard = {
      id: id, // یا از uuid استفاده کن
      question,
      answer,
    };
console.log(newCard)
onAdd(newCard);
setQuestion('');
    setAnswer('');
    setID('');




    }
   return(
   <>
   <div className="main">
     
   <form className="conatainer" >
    <label>id:
      <input type="text" className="input-box" name="" id="" value={id} onChange={(e)=>setID(e.target.value)} />
      </label>
    <label>Enter Question:
        <input type="text"  className="input-box" value={question} onChange={(e) => setQuestion(e.target.value)}/>
      </label>
      <label>Enter Answer:
        <input type="text"  className="input-box" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
      </label>
  
      <button type="button"  className="btn" onClick={handleSubmit}>ADD Item</button>
   </form >
   </div>
   </>
   )
}
export default AddFlashCardForm