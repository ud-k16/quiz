import { useDispatch, useSelector } from 'react-redux';
import { userChoice } from '../store/reducer';
import '../css/style.css';

const Result = (props) => {
  const { questions, totalQuestions } = useSelector((state) => state);

  const calculateResult = () => {
    let correctAnswerByUser = 0;
    questions.forEach(({ userChoice, choices, correctAnswer }) => {
      if (userChoice == choices.indexOf(correctAnswer) && userChoice != -1)
        correctAnswerByUser++;
    });
    return correctAnswerByUser;
  };

  return (
    <div className="resultbox">
      <div>
        <h1>Your Score</h1>
      </div>
      <div className="result">{`${calculateResult()}/${totalQuestions}`}</div>
    </div>
  );
};

export default Result;
