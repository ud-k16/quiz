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
          // const answered = userAnswer.includes(index);
          const answered = questions[index].userChoice != -1;

          return (
            <Button
              variant={answered ? 'contained' : 'outlined'}
              key={index}
              onClick={() => {
                answered
                  ? dispatch(displayQuestion(index))
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
