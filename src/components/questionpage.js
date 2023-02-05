import { useSelector, useDispatch } from 'react-redux';
import '../css/style.css';
import {
  Button,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import { displayQuestion, updateAnswer, userChoice } from '../store/reducer';
import { useState, ChangeEvent } from 'react';
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

// const QuestionDisplay = ({ setShowResult }) => {
//   const { displayQuestionNumber, questions, totalQuestions } = useSelector(
//     (state) => state
//   );
//   const dispatch = useDispatch();
//   const AnswerOptions = () => {
//     return (
//       <FormControl>
//         {questions[displayQuestionNumber].choices.map((option, index) => {
//           return (
//             <FormControlLabel
//               value={index}
//               control={<Radio />}
//               label={option}
//               labelPlacement="end"
//               key={index}
//               onClick={(event) => dispatch(userChoice(event.target.value))}
//               // defaultChecked={true}
//             />
//           );
//         })}
//       </FormControl>
//     );
//   };
//   return (
//     <div className="questionSection">
//       <div>{questions[displayQuestionNumber].question}</div>
//       <AnswerOptions />
//       <Button
//         variant="contained"
//         onClick={() => {
//           console.log('presses');
//           dispatch(updateAnswer(displayQuestionNumber));
//           if (displayQuestionNumber != totalQuestions - 1)
//             dispatch(displayQuestion(displayQuestionNumber + 1));
//           else setShowResult(true);
//         }}
//       >
//         save And Continue
//       </Button>
//     </div>
//   );
// };
// const ToggleDisplay = () => {
//   const { questions, userAnswer } = useSelector((state) => state);
//   const dispatch = useDispatch();

//   return (
//     <div className="toggleSection">
//       {questions.map((data, index) => {
//         const answered = userAnswer.includes(index);
//         // console.log(`${JSON.stringify(userAnswer.values(), null, 4)}`);

//         return (
//           <Button
//             variant={answered ? 'contained' : 'outlined'}
//             key={index}
//             onClick={() => {
//               answered
//                 ? dispatch(displayQuestion(index))
//                 : window.alert('cannot navigate to an un answered question');
//             }}
//           >
//             {index + 1}
//           </Button>
//         );
//       })}
//     </div>
//   );
// };
export default Question;
