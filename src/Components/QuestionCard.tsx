import React from 'react';
import { AnswerObj } from '../App';

type props = {
  question: string,
  answers: string[],
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: AnswerObj | undefined,
  questionNo: number,
  totalQuestion: number
}

export const QuestionCard: React.FC<props> = ({ question, answers, callback, userAnswer, questionNo, totalQuestion }) => {
  
  return (
    <div className="card_container">
      <p className="Number">Question: {questionNo}/{totalQuestion}</p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer, ind) => (
          <div key={ind} >
            <button className="answer" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}

      </div>
    </div>
  )
}
