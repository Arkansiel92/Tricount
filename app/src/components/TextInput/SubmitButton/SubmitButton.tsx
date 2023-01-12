import { FormProvider, useForm } from "react-hook-form";

const SubmitButton = (
  name?: string | any,
  value?: string | any
): JSX.Element => {
  const methods = useForm({ mode: "onSubmit" });

  return (
    <FormProvider {...methods}>
      <button type="submit" value={name.value}>
        {value}
      </button>
    </FormProvider>
  );
};

export default SubmitButton;
