import { SoundButton } from "./sound-button";
import classNames from "classnames";

const questionColor = (color) =>
     classNames(`bg-${color}`, "shadow-2xl bg m-2 p-2 rounded-xl");

export const QuestionCard = (
     question,
     questions,
     soundButtonOnClick,
     noteButtonOnClick
) => {
     return (
          <div className={questionColor(question.color)} key={question.id}>
               <div>
                    <SoundButton
                         color={question.color}
                         onClick={soundButtonOnClick}>
                         {question.title.toLocaleUpperCase()}
                    </SoundButton>
               </div>
          </div>
     );
};
