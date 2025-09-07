
import './Flashcard.css';
function Flashcard({question,answer,flipped, setFlipped,hidden}){
   
    return(
<>
<div     className={`flashcard ${flipped ? 'flipped' : ''} ${hidden ? 'hidden' : ''}`}

 onClick={()=>{setFlipped(!flipped)}}> 
<div className="front">{question}</div>
<div className="back">{answer}</div>
</div>
</>
    )

}
export default Flashcard