import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { customStyles } from "../../helpers";
import { useCalendarModal } from "../../hooks/useCalendarModal";

export const CalendarModal = () => {
  const {
    end,
    isDateModalOpen,
    notes,
    closeDateModal,
    onDateChanged,
    onInputChanged,
    onSubmit,
    start,
    title,
    titleClass,
  } = useCalendarModal();

  return (
    <Modal
      className="modal"
      closeTimeoutMS={200}
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      overlayClassName="modal-background"
      style={customStyles}
    >
      <h1> New event </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Start datetime</label>
          <DatePicker
            className="form-control"
            dateFormat="Pp"
            onChange={(event) => onDateChanged(event, "start")}
            selected={start}
            showTimeSelect
          />
        </div>

        <div className="form-group mb-2">
          <label>End datetime</label>
          <DatePicker
            className="form-control"
            dateFormat="Pp"
            minDate={start}
            onChange={(event) => onDateChanged(event, "end")}
            selected={end}
            showTimeSelect
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Title and notes</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Event title"
            name="title"
            autoComplete="off"
            value={title}
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
            value={notes}
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
