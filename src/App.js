import './App.css';
import {useState} from 'react';
function App() {
  const [showresult,setshowresult]=useState(false)
  const [score,setscore]=useState(0)
  const [currentquestion,setcurrentquestion]=useState(0)

  const restart=()=>{
      setscore(0)
      setcurrentquestion(0)
      setshowresult(false)
  }

  const optionclicked=(iscorrect)=>{
      //iscorrect=true 
      if(iscorrect){
          setscore(score+1)
      }
      if(currentquestion+1<questions.length){
          setcurrentquestion(currentquestion+1)
      }
      else{
          // if(score==0){
          //     console.log("try again")
          // }
          setshowresult(true)
      }
  }

  const questions=[
      {
          text:"which is the capital of america",
          options:[
              {id:0,text:"Bostan",iscorrect:false},
              {id:1,text:"New york city",iscorrect:false},
              {id:2,text:"Santa fe",iscorrect:false},
              {id:3,text:"Washington",iscorrect:true}
          ]
      },
      {
          text:"which is ur country",
          options:[
              {id:0,text:"America",iscorrect:false},
              {id:1,text:"Africa",iscorrect:false},
              {id:2,text:"India",iscorrect:true},
              {id:3,text:"Afganisthan",iscorrect:false},
          ],
      },
        {
          text: "Who was the second president of the US?",
          options: [
            { id: 0, text: "John Adams", isCorrect: true },
            { id: 1, text: "Paul Revere", isCorrect: false },
            { id: 2, text: "Thomas Jefferson", isCorrect: false },
            { id: 3, text: "Benjamin Franklin", isCorrect: false },
          ],
        },
        {
          text: "What is the largest state in the US?",
          options: [
            { id: 0, text: "California", isCorrect: false },
            { id: 1, text: "Alaska", isCorrect: true },
            { id: 2, text: "Texas", isCorrect: false },
            { id: 3, text: "Montana", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 0, text: "Canada", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Cuba", isCorrect: true },
            { id: 3, text: "Mexico", isCorrect: false },
          ],
        },
  ]
  return (
    <div className="App">
       <h1>General Quiz</h1>
            {/* <h2>your correct answer :{score} </h2> shouldn't show at the time of quiz */}
            {showresult ? (
            <div className="final-results">
                <h3>Final result</h3>
                {score===0? (<h4>Try again</h4>):("")}
                <h2>your score:{score} out of {questions.length} </h2>
                <button onClick={restart}>Restart Game</button>
            </div>
            ):(
            <div className="question-card">
                <h2>Question: {currentquestion+1} out of {questions.length} </h2>
                <h3 className="question-text">({currentquestion+1}){questions[currentquestion].text}?</h3>
                <ul>
                    {questions[currentquestion].options.map((option)=>{
                        return(
                        <li className="options-text" onClick={()=>optionclicked(option.iscorrect)} key={option.id}>{option.text}</li>
                        )
                    })
                }
                </ul>
            </div>
            )}
    </div>
  );
}

export default App;
