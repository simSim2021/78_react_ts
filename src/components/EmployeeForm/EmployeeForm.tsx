import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { EmployeeFormWrapper } from "./styles";
import type { EmployeeFormProps } from "./types";

function EmployeeForm({ setEmployee }: EmployeeFormProps) {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Field name is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),

    surname: Yup.string()
      .required("Field surname is required")
      .max(15, "Max 15 symbols"),

    age: Yup.number()
      .required("Field age is required")
      .typeError("Age must be a number")
      .min(18, "Min age is 18")
      .max(80, "Max age is 80"),

    jobPosition: Yup.string()
      .max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    },

    validationSchema: schema,

    validateOnChange: false,

    onSubmit: (values) => {
      setEmployee(values);
    },
  });

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        label="Name*"
        placeholder="Enter your name"
        id="name_id"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />

      <Input
        name="surname"
        label="Surname*"
        placeholder="Enter your surname"
        id="surname_id"
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.errors.surname}
      />

      <Input
        name="age"
        label="Age*"
        type="number"
        placeholder="Enter your age"
        id="age_id"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />

      <Input
        name="jobPosition"
        label="Job Position"
        placeholder="Enter your employee position"
        id="jobPosition_id"
        value={formik.values.jobPosition}
        onChange={formik.handleChange}
        error={formik.errors.jobPosition}
      />

      <Button
        name="Create"
        type="submit"
      />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;