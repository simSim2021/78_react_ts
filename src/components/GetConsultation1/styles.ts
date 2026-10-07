import styled from "@emotion/styled";

export const ConsultationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 30px;
  border-radius: 12px;
  background-color: white;
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-size: 26px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmailInput = styled.input`
  padding: 12px;
  border: 1px solid gray;
  border-radius: 6px;
  font-size: 16px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  font-weight: 600;
`;