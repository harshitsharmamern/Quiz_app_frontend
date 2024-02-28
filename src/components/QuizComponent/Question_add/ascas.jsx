import React, { useState } from 'react';

const QuestionAdd = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    const newQuestion = {
      question: "",
      options: [
        { option: "", isChecked: false },
        { option: "", isChecked: false },
        { option: "", isChecked: false },
        { option: "", isChecked: false },
      ],
    };

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const handleQuestionChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].option = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].isChecked = !updatedQuestions[questionIndex].options[optionIndex].isChecked;
    setQuestions(updatedQuestions);
  };

  return (
    <>
      <div className="container">
        <button onClick={addQuestion}>Add question</button>

        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <textarea
              value={question.question}
              onChange={(event) => handleQuestionChange(questionIndex, event)}
              placeholder="Enter your question"
            />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="text"
                  value={option.option}
                  onChange={(event) => handleOptionChange(questionIndex, optionIndex, event)}
                  placeholder={`Option ${optionIndex + 1}`}
                />
                <input
                  type="checkbox"
                  checked={option.isChecked}
                  onChange={() => handleCheckboxChange(questionIndex, optionIndex)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionAdd;
