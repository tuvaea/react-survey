import { useState } from "react";
import { Form } from "./Form";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [submittedForms, setSubmittedForms] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedForms((prevForms) => [...prevForms, formData]);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <ul>
          {submittedForms.map((item, index) => (
            <AnswersItem key={index} answerItem={item} />
          ))}
        </ul>
      </section>
      <section className="survey__form">
        <Form onSubmit={handleFormSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
