import { useContext } from "react";
import { FormContext } from "./ParentContext";

function FormFields() {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormFields;