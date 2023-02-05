import { useDispatch, useSelector } from 'react-redux';
import { userChoice } from '../store/reducer';

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
    <>
      <div> Your Score</div>
      <div>{`${calculateResult()}/${totalQuestions}`}</div>;
    </>
  );
};

export default Result;
