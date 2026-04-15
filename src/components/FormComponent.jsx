import FormFields from "./FormFields";
import ThemeButton from "./ThemeButton";

function FormComponent() {
  return (
    <div className="form-box">
      <FormFields />
      {/* <button className="submit-btn">Submit</button> */}
      <ThemeButton />
    </div>
  );
}

export default FormComponent;