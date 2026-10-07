import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import type { ConsultationFormValues } from "./types";

import {
  ConsultationForm,
  FormTitle,
  FormField,
  EmailInput,
  ErrorMessage,
  CheckboxContainer,
  Checkbox,
  SubmitButton,
  SuccessMessage,
} from "./styles";

function GetConsultation1() {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Введите корректный email")
      .required("Email обязателен"),

    agreement: Yup.boolean()
      .oneOf([true], "Необходимо согласие на обработку персональных данных")
      .required(),
  });

  const formik = useFormik<ConsultationFormValues>({
    initialValues: {
      email: "",
      agreement: false,
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setSuccessMessage("Мы с Вами скоро свяжемся");

      resetForm();
    },
  });

  return (
    <ConsultationForm onSubmit={formik.handleSubmit}>
      <FormTitle>Получить консультацию</FormTitle>

      <FormField>
        <EmailInput
          type="email"
          name="email"
          placeholder="Введите email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
      </FormField>

      <FormField>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            name="agreement"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />

          <span>Я согласен на обработку персональных данных</span>
        </CheckboxContainer>

        {formik.touched.agreement && formik.errors.agreement && (
          <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
        )}
      </FormField>

      <SubmitButton type="submit">
        Получить консультацию
      </SubmitButton>

      {successMessage && (
        <SuccessMessage>{successMessage}</SuccessMessage>
      )}
    </ConsultationForm>
  );
}

export default GetConsultation1;