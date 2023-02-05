import { useSelector, useDispatch } from 'react-redux';
import { Button, Radio, FormControl, FormControlLabel } from '@mui/material';
import { displayQuestion, updateAnswer, userChoice } from '../store/reducer';
import { useState } from 'react';

const QuestionDisplay = ({ setShowResult }) => {
  const { displayQuestionNumber, questions, totalQuestions, userAnswer } =
    useSelector((state) => state);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const AnswerOptions = ({ setSelected }) => {
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
              onClick={(event) => {
                dispatch(userChoice(event.target.value));
                setSelected(true);
              }}
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
      <AnswerOptions setSelected={setSelected} />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(updateAnswer(displayQuestionNumber));

          if (displayQuestionNumber != totalQuestions - 1)
            dispatch(displayQuestion(displayQuestionNumber + 1));
          else setShowResult(true);
          setSelected(false);
        }}
        style={{ width: '20%' }}
        disabled={!selected}
      >
        save And Continue
      </Button>
    </div>
  );
};

export default QuestionDisplay;
