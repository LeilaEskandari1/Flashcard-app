import { useState } from 'react';
import './Flashcard.css';
function Flashcard({question,answer}){
    const[flipped,setFlipped]=useState(false);
    return(
<>
<div   className={`flashcard ${flipped ? 'flipped' : ''}`}
 onClick={()=>{setFlipped(!flipped)}}> 
<div className="front">{question}</div>
<div className="back">{answer}</div>
</div>
</>
    )

}
export default Flashcard