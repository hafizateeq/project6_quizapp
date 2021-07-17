import { shuffleArray } from "./Utils";

export type Question = {
  category: string,
  correct_answer: string,
  difficulty: string,
  question: string,
  incorrect_answers: string[],
  type: string
}

export type QuestionState = Question & { answers: string[] }

// export enum Difficulty {
//   EASY = "easy",
//   MEDIUM = "medium",
//   HARD = "hard"
// }

export const fetchQuizData = async (amount: number, difficulty: string, category: number) => {


  const fetchApi = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
  const data = await fetchApi.json();
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }
  ))
}