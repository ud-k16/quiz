import { useSelector, useDispatch } from 'react-redux';
import { Button, Radio, FormControl, FormControlLabel } from '@mui/material';
import { displayQuestion, updateAnswer, userChoice } from '../store/reducer';

const QuestionDisplay = ({ setShowResult }) => {
  const { displayQuestionNumber, questions, totalQuestions } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const AnswerOptions = () => {
    return (
      <FormControl>
        {questions[displayQuestionNumber].choices.map((option, index) => {
          return (
            <FormControlLabel
              value={index}
              control={<Radio />}
              label={option}
              labelPlacement="end"
              key={index}
              onClick={(event) => dispatch(userChoice(event.target.value))}
              // defaultChecked={true}
            />
          );
        })}
      </FormControl>
    );
  };

  return (
    <div className="questionSection">
      <div>{questions[displayQuestionNumber].question}</div>
      <AnswerOptions />
      <Button
        variant="contained"
        onClick={() => {
          console.log('presses');
          dispatch(updateAnswer(displayQuestionNumber));
          if (displayQuestionNumber != totalQuestions - 1)
            dispatch(displayQuestion(displayQuestionNumber + 1));
          else setShowResult(true);
        }}
      >
        save And Continue
      </Button>
    </div>
  );
};

export default QuestionDisplay;
