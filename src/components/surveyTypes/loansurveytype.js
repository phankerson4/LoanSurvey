import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Json from "../surveys/loanquestions";

const LoanSurvey = () => {
  return (
    <Survey.Survey
      // showCompletedPage = {true}
      //onComplete={data=>console.log(data.valuesHash)}
      json={Json}
    />
  );
};
export default LoanSurvey;
