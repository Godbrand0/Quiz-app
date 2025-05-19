import React, { useEffect, useState } from "react";
import Result from "./Result";
import QuestionCard from "./QuestionCard";

export default function App() {
  const [questions, setQuestions] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    fetch("/src/assets/quiz_questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("failed", err));
  }, []);
  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        {questions.length > 0 ? (
          showScore ? (
            <Result score={score} total={questions.length} />
          ) : (
            <QuestionCard
              data={questions[currentQuestion]}
              onAnswer={handleAnswer}
              current={currentQuestion + 1}
              total={questions.length}
            />
          )
        ) : (
          <p className="text-center">Loading questions</p>
        )}
      </div>
    </div>
  );
}
