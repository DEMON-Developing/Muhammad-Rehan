'use client';

import { useState } from 'react';
import { quizQuestions } from './quiz';

const QuizSection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <section className="quiz-container">
            <h2>A Short Quiz</h2>
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {quizQuestions.length} questions correctly.
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
                        </div>
                        <div className="question-text">{quizQuestions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                            >
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default QuizSection;