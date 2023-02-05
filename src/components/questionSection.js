import { useSelector, useDispatch } from 'react-redux';
import { Button, Radio, FormControl, FormControlLabel } from '@mui/material';
import { displayQuestion, updateAnswer, userChoice } from '../store/reducer';
import { useState } from 'react';

const QuestionDisplay = ({ setShowResult }) => {
  const { displayQuestionNumber, questions, totalQuestions, userAnswer } =
    useSelector((state) => state);
  const isAnswered = questions[displayQuestionNumber].userChoice != -1;
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(isAnswered);

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
              onChange={(event) => {
                dispatch(userChoice(event.target.value));
                // setSelected(true);
              }}
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
          if (displayQuestionNumber != totalQuestions - 1)
            dispatch(displayQuestion(displayQuestionNumber + 1));
          else setShowResult(true);
        }}
        style={{ width: '20%' }}
        disabled={!isAnswered}
      >
        save And Continue
      </Button>
    </div>
  );
};

export default QuestionDisplay;
