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
          text:"What is an Array",
          options:[
              {id:0,text:"An array is an special variable ,which is used to store more than one value",iscorrect:false},
              {id:1,text:"Array index starts from 0",iscorrect:false},
              {id:2,text:"Array length count starts from 1",iscorrect:false},
              {id:3,text:"All of the above",iscorrect:true}
          ]
      },
      {
          text:"Which statement is false",
          options:[
              {id:0,text:"let keyword can be Reassigned",iscorrect:false},
              {id:1,text:"let keyword can be Redeclared",iscorrect:true},
              {id:2,text:"let keyword used in block scope",iscorrect:false},
              {id:3,text:"let keyword can be Hoisted",iscorrect:false}
          ],
      },
        {
          text: "What is an Concat method",
          options: [
            { id: 0, text: "it joins two or more array", iscorrect:false },
            { id: 1, text: "it returns a new array,containing the joined arrays", iscorrect:false },
            { id: 2, text: "it does not change the existing array", iscorrect:false },
            { id: 3, text: "All of the above", iscorrect:true }
          ],
        },
        {
          text: "What is an Javascript",
          options: [
            { id: 0, text: "Javascript is an multithreaded language", iscorrect:false },
            { id: 1, text: "Javascript is an singlethreaded language", iscorrect:false },
            { id: 2, text: "Javascript is an dyanmically typed language ", iscorrect:false },
            { id: 3, text: "Both 2 and 3", iscorrect:true }
          ],
        },
        {
          text: "eval('10*10+5')",
          options: [
            { id: 0, text: "'105'", iscorrect:true },
            { id: 1, text: "105", iscorrect:false },
            { id: 2, text: "150", iscorrect:false },
            { id: 3, text: "'10*10+5'", iscorrect:false }
          ],
        },
  ]
  return (
    <div className="App">
       <h1>General Quiz</h1>
      <h4>Topic : Javascript</h4>
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
                <h3 className="question-text">({currentquestion+1}) {questions[currentquestion].text} ?</h3>
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
