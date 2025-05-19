import React from "react";

export default function QuestionCard({ data, onAnswer, current, total }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Question {current} of {total}
      </h2>
      <p className="mb-4 text-lg">{data.question}</p>
      <div className="space-y-2">
        {data.choices.map((choice, index) => (
          <button
            className="w-full py-2 bg-blue px-4 text-white rounded hover:bg-blue-600 transition"
            key={index}
            onClick={() => onAnswer(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
