import "./InputForText.css";

function InputForText({
  inputType,
  label,
  value,
  setValue,
  mandatory,
  labelBackgroundColor,
}) {
  return (
    <div className="custom-input-wrapper">
      <input
        type={inputType}
        id="exampleFormControlInput1"
        className="custom-input"
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={mandatory}
      />
      <label htmlFor="exampleFormControlInput1" className="custom-label">
        <div
          className="custom-label-text-container"
          style={{
            backgroundColor: labelBackgroundColor
              ? labelBackgroundColor
              : "#fafafa",
          }}
        >
          {label}
          {mandatory && (
            <span
              style={{
                color: "#D13F97",
                marginLeft: "2px",
              }}
            >
              *
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

InputForText.defaultProps = {
  mandatory: false,
};

export default InputForText;
