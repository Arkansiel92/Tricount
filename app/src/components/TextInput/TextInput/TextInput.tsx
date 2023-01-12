import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const TextInput = (
  name?: string | any,
  className?: string,
  defaultValue?: string | number,
  label?: string | number | any,
  placeholder?: string,
  rules?: Record<string, unknown>,
  error?: { message?: string },
  type?: string
): JSX.Element => {
  const [value, setValue] = useState("");
  const methods = useForm({ mode: "onChange" });

  return (
    <FormProvider {...methods}>
      <label htmlFor={name.name}>{name.label}</label>
      <div className="field-wrapper">
        <input
          name={name.name}
          type={name.type}
          className={name.className}
          placeholder={name.placeholder}
          defaultValue={name.defaultValue}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </FormProvider>
  );
};

export default TextInput;
