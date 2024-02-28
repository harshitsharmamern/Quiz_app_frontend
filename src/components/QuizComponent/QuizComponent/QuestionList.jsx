import Questions from '../Question_add/QuestionBank';
import { React, useContext, useState } from 'react';
import { QuizContext } from '../Quizcontext/QuizContextProvider';
import Clock from '../Question_add/Clock';



const Box = ({ question_data, prevarr, setarray,currentque,handlesubmit}) => {
    const [ans_select, set_ans_select] = useState("")
    
    const handleOptionChange = (que_id,ansget,op) => {
        // console.log(e.target);
        setarray((prev)=>{
            let update = [...prev]
            update[que_id] = op
            return update
        })
        // resultArray[que_id] = Questions[que_id].Answer

        set_ans_select(ansget)
        
    };
    // console.log({arr : prevarr,state : currentque});
    // console.log({msg: prevarr.length>currentque && prevarr[currentque]});
    console.log(prevarr);
    return (
      <>
      {/* <Clock */}
             <Clock handlesubmit={handlesubmit}/>

        <div className='EK_question_dikhana_hai' key={currentque}>
          <div className="question_name">{currentque+1}{question_data.question}</div>
          <div className="options_name">
            <div
              className={`option_hai
                ${ans_select == question_data.options.op1 ? "option_hai_select" : ""}
                // ${question_data.options.op1 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque]=='a' ? "option_hai_select" : ""}

              `}
              id="option1"
              onClick={() => handleOptionChange(currentque, question_data.options.op1,'a')}
            >
              {question_data.options.op1}
            </div>
            <div
              className={`option_hai 
                ${ans_select == question_data.options.op2 ? "option_hai_select" : ""}
                // ${question_data.options.op2 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque]=='b' ? "option_hai_select" : ""}

              `}
              id="option2"
              onClick={() => handleOptionChange(currentque, question_data.options.op2,'b')}
            >
              {question_data.options.op2}
            </div>
            <div
              className={`option_hai 
                ${ans_select == question_data.options.op3 ? "option_hai_select" : ""}
                // ${question_data.options.op3 == prevarr[currentque] ? "option_hai_select" : ""}
                ${prevarr[currentque]=='c' ? "option_hai_select" : ""}

              `}
              id="option3"
              onClick={() => handleOptionChange(currentque, question_data.options.op3,'c')}
            >
              {question_data.options.op3}
            </div>
            <div
              className={`option_hai 
                ${ans_select == question_data.options.op4 ? "option_hai_select" : ""}
                // ${question_data.options.op4 == prevarr[currentque ] ? "option_hai_select" : ""}
                ${prevarr[currentque]=='d' ? "option_hai_select" : ""}

                `}
              id="option4"
              onClick={() => handleOptionChange(currentque, question_data.options.op4,'d')}
            >
              {question_data.options.op4}
            </div>
          </div>
        </div>

        </>
      );
      
}

const QuestionList = ({prevarr,setarray,handlesubmit}) => {
    // const [resultArray, setresultArray] =  useState([])
    const { Questionbank_q,setQuizScore, currentque, setcurrentque } = useContext(QuizContext);
// console.log(QuizState.score);
// console.log(Quizscore);

  // console.log({queare : Questionbank_q});

    return (
        <>
          
            <Box
            question_data={Questionbank_q[currentque]}
            prevarr={prevarr}
            setarray={setarray}
            currentque = {currentque}
            handlesubmit={handlesubmit}
             />
            <div className='is_mai_prev_next_btn_hai' >

                {currentque == 0 ? <div> prev</div> :
                    <div className='is_mai_prev_next_btn_hai_prev'
                        onClick={() => setcurrentque(currentque - 1)}
                    >
                        prev
                    </div>}

                {currentque == Questionbank_q.length - 1 ? <div> next</div> :
                    <div className='is_mai_prev_next_btn_hai_next'
                        onClick={() => {
                            setcurrentque(currentque + 1)
                             }
                        }
                    >next</div>}
            </div>
        </>
    )
}

export default QuestionList