import React from "react";
import useVisualMode from "hooks/useVisualMode";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import "./styles.scss";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "STATUS";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVE);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW, true))
      .catch(() => transition(ERROR_SAVE, true));
  }

  function deleteInterview() {
    transition(DELETE);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY, true))
      .catch(() => transition(ERROR_DELETE, true));
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* {props.time ? `Appointment at ${props.time}` : "No Appointments"} */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer}
          onDelete={() => {
            transition(CONFIRM);
          }}
          onEdit={() => transition(CREATE)}
        />
      )}
      {mode === CREATE && (
        <Form
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === SAVE && <Status message="Saving" />}
      {mode === CONFIRM && (
        <Confirm onCancel={() => back()} onConfirm={deleteInterview} />
      )}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === ERROR_SAVE && (
        <Error message="Could not book appointment." onClose={() => back()} />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not cancel appointment." onClose={() => back()} />
      )}
    </article>
  );
}
