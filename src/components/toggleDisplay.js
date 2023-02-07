import { useSelector, useDispatch } from 'react-redux';
import '../css/style.css';
import { displayQuestion } from '../store/reducer';
import { Button } from '@mui/material';

const ToggleDisplay = () => {
  const { questions } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="toggleSection">
      <div className="optionContainer">
        {questions.map((data, index) => {
          //answered variable is used in marking if question answered or not ,
          //so to enabling navigation to answered question otherwise restricting user from moving to an unanswered question
          const answered = questions[index].userChoice != -1;

          return (
            <Button
              variant={answered ? 'contained' : 'outlined'}
              key={index}
              //responding to user click on the question number if that question is viewable or restricted based on if it is answered criteria.
              onClick={() => {
                answered
                  ? dispatch(displayQuestion(index)) //displayQuestion is an state reducer[state variable:displayQuestionNumber] indicating which question number to display
                  : window.alert('cannot navigate to an un answered question');
              }}
              style={{
                borderColor: 'black',
                margin: 10,
                color: answered ? 'white' : 'black',
              }}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleDisplay;
