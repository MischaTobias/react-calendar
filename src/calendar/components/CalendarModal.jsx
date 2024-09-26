import { useState } from "react";

import { addHours, set } from "date-fns";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChanged = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({ ...formValues, [changing]: event });
  };

  const onCloseModal = () => {
    console.log("closing modal");
    setIsOpen(false);
  };

  return (
    <Modal
      className="modal"
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="modal-background"
      style={customStyles}
    >
      <h1> New event </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Start datetime</label>
          <DatePicker
            className="form-control"
            dateFormat="Pp"
            onChange={(event) => onDateChanged(event, "start")}
            selected={formValues.start}
          />
        </div>

        <div className="form-group mb-2">
          <label>End datetime</label>
          <DatePicker
            className="form-control"
            dateFormat="Pp"
            minDate={formValues.start}
            onChange={(event) => onDateChanged(event, "end")}
            selected={formValues.end}
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Title and notes</label>
          <input
            type="text"
            className="form-control"
            placeholder="Event title"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">
            A brief description
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Additional information
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save mr-1"></i>
          <span>Save</span>
        </button>
      </form>
    </Modal>
  );
};
