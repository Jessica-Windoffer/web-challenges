import "./EntryForm.css";
import Button from "../Button";

// Update this component's function declaration to accept a new prop, like onAddEntry
export default function EntryForm({ onAddEntry }) {
  // Write a function handleSubmit
  function handleSubmit(event) {
    // prevent the default form behavior when submitting
    event.preventDefault();

    // gather the values of all input fields
    const formData = new FormData(event.target);

    // create an object with the keys motto and notes containing the fields' values
    const data = {
      motto: formData.get("motto"), // Get value of input with name 'motto'
      notes: formData.get("notes"), // Get value of textarea with name 'notes'
    };

    // Call onAddEntry and pass the object
    onAddEntry(data);

    // reset the form after submitting
    event.target.reset();
  }

  return (
    // pass it as the onSubmit attribute of the form JSX tag
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
