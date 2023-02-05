import '../css/style.css';
import { useState } from 'react';
import Result from './result';
import ToggleDisplay from './toggleDisplay';
import QuestionDisplay from './questionSection';
const Question = () => {
  const [showResult, setShowResult] = useState(false);
  return showResult ? (
    <Result />
  ) : (
    <div className="mainDiv">
      <QuestionDisplay setShowResult={setShowResult} />
      <ToggleDisplay />
    </div>
  );
};

export default Question;
