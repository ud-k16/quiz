import { useSelector, useDispatch } from 'react-redux';
import '../css/style.css';
import { displayQuestion } from '../store/reducer';
import { Button } from '@mui/material';

const ToggleDisplay = () => {
  const { questions, userAnswer } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="toggleSection">
      {questions.map((data, index) => {
        const answered = userAnswer.includes(index);
        return (
          <Button
            variant={answered ? 'contained' : 'outlined'}
            key={index}
            onClick={() => {
              answered
                ? dispatch(displayQuestion(index))
                : window.alert('cannot navigate to an un answered question');
            }}
          >
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default ToggleDisplay;
