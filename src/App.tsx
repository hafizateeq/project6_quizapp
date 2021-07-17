import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './Components/QuestionCard';
import { fetchQuizData } from './API';
import { QuestionState } from './API';
import { Selection } from './Components/Selection';

export type AnswerObj = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string
}

function App() {


  const [loading, setloading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswers] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);
  const [useCategory, setCategory] = useState(0);
  const [useDifficulty, setDifficulty] = useState("");
  const [useTotalQuestions, setTotalQuestions] = useState(0);


  const checkCategory = (e: any) => {
    const category = e.target.value;
    setCategory(category);
  }
  const checkDifficulty = (e: any) => {
    const Difficulty = e.target.value;
    setDifficulty(Difficulty);
  }
  const checkTotalQuestions = (e: any) => {
    const Total_Questions = e.target.value;
    setTotalQuestions(Total_Questions);
  }

  const startQuiz = async () => {
    setloading(true);
    setGameover(false);
    const newQuestions = await fetchQuizData(useTotalQuestions, useDifficulty, useCategory);
    setQuestions(newQuestions);
    setUserAnswers([]);
    setScore(0);
    setNumber(0);
    setloading(false);
  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prev => prev + 1)
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = async () => {
    const nextQuestion = number + 1;
    if (nextQuestion === useTotalQuestions) {
      setGameover(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameover || userAnswer.length === useTotalQuestions ?
      <div className="startPage">
        {gameover || userAnswer.length === useTotalQuestions ?
          <Selection
            Category={useCategory}
            Difficulty={useDifficulty}
            Total_questions={useTotalQuestions}
            callback={checkCategory}
            callbackDifficulty={checkDifficulty}
            callbackNo={checkTotalQuestions}
          /> : null
        }
        {gameover || userAnswer.length === useTotalQuestions ?
          <button className="start" onClick={startQuiz}>Start Quiz</button> : null
        }
      </div> : null}
      {!gameover ? <p className="score">Score: {score}</p> : null}
      {loading ? <p>Loading Questions...</p> : null}
      {!loading && !gameover && questions[number] ?
        <QuestionCard
          questionNo={number + 1}
          totalQuestion={useTotalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}
        /> : gameover ? null : !loading ? `${useTotalQuestions} questions not available in this category..., please select minimum questions` : null
      }
      {!loading && !gameover && userAnswer.length === number + 1 && number !== useTotalQuestions - 1 ?
        (<button className="next" onClick={nextQuestion}>Next Question</button>) : null
      }
    </div>
  );
}

export default App;
