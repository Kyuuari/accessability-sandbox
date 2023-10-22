// type Props = {};

export default function FormVanilla() {
  return (
    <div>
      <div className="header">Page Title</div>
      <div className="control">
        <label>
          Full name
          <input type="text" />
        </label>
      </div>
      <div className="control">
        <label>
          Professional Experience
          <textarea></textarea>
        </label>
      </div>
      <div className="fieldset">
        <div className="legend">Favourite Programming Language</div>
        <div className="control">
          <input name="language" type="radio" value="javascript" />
          <div className="label">Javascript</div>
        </div>
        <div className="control">
          <input name="language" type="radio" value="Java" />
          <div className="label">Java</div>
        </div>
        <div className="control">
          <input name="language" type="radio" value="C" />
          <div className="label">C</div>
        </div>
        <button onClick={() => alert("Add another programming language")}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <button
        className="submit-button"
        id="button"
        onClick={() => alert("Submitting job application...")}>
        Submit
      </button>
    </div>
  );
}
