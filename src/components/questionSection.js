import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from '@mui/material';
import { displayQuestion, userChoice } from '../store/reducer';

const QuestionDisplay = ({ setShowResult }) => {
  const { displayQuestionNumber, questions, totalQuestions } = useSelector(
    (state) => state
  );
  //isAnswered variable helps in enabling checked prop of respective radio button
  //and also helps in disabling save and continue button if the question is not answered.
  const isAnswered = questions[displayQuestionNumber].userChoice != -1;
  const dispatch = useDispatch();

  return (
    <div className="questionSection">
      <div className="questionContainer">
        {`${displayQuestionNumber + 1}. ${
          questions[displayQuestionNumber].question
        }`}
      </div>

      <FormControl>
        <RadioGroup
          onChange={(event) => {
            dispatch(userChoice(event.target.value));
          }}
        >
          {questions[displayQuestionNumber].choices.map((option, index) => {
            return (
              <FormControlLabel
                value={index}
                control={
                  <Radio
                    defaultChecked={false}
                    checked={
                      questions[displayQuestionNumber].userChoice == index
                    }
                  />
                }
                label={option}
                labelPlacement="end"
                key={index}
                name={'radio'}
                className="options"
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => {
          //if the current question is last question . result page is shown
          //logically questionNumber is the index of the  Questions. displayed for user as index + 1 since index starts with 0
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
