import { useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function CallButton() {
  const dialogRef = useRef(null);
  const [activeForm, setActiveForm] = useState(false);

  const handleClick = () => {
    setActiveForm((prevActiveForm) => {
      if (prevActiveForm) {
        dialogRef.current.close();
      } else {
        dialogRef.current.showModal();
      }
      return !prevActiveForm;
    });
  };

  const modalContent = (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      open={activeForm ? true : undefined}
    >
      <div className="modal-header">
        <h2>Get in touch!</h2>
      </div>
      <div className="modal-body">
        <form action="#">
          <div className="form-inputs">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Lastname" required />
            <input type="number" placeholder="Phone number" required />
            <input type="email" placeholder="Email" required />
            <select name="contact-time" id="contact-time" required>
              <option value="a">7am - 8am</option>
              <option value="a">8am - 9am</option>
              <option value="a">9am - 10am</option>
              <option value="a">10am - 11am</option>
              <option value="a">11am - 12pm</option>
              <option value="a">12pm - 1pm</option>
              <option value="a">2pm - 3pm</option>
              <option value="a">3pm - 4pm</option>
              <option value="a">4pm - 5pm</option>
              <option value="a">5pm - 6pm</option>
              <option value="a">6pm - 7pm</option>
            </select>
          </div>
          <div className="form-text-area">
            <textarea
              name="description"
              id="description"
              placeholder="Describe your request"
            ></textarea>
          </div>
          <div className="buttons-field">
            <button type="button" onClick={handleClick}>
              Cancel
            </button>
            <button type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );

  return (
    <>
      <button onClick={handleClick} type="button" className="contact-btn">
        Schedule a free call
      </button>
      {ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      )}
    </>
  );
}
