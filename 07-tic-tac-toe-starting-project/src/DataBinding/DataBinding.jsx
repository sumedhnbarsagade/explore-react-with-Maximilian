import React from "react";
import Review from "./Review";

import './DataBinding.css'

function DataBinding() {
  const [studentName, setSetudentName] = React.useState();
  const [feedback, setFeedback] = React.useState();

  function handleStudentName(e) {
    setSetudentName(e.target.value);
  }

  function handleFeedback(e) {
    setFeedback(e.target.value);
  }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea type="text" onChange={handleFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleStudentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your Feedback</h2>

        <Review feedback={feedback} student={studentName} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default DataBinding;
