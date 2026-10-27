import styled from "@emotion/styled";

export const GetProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 400px;
  padding: 30px;
`;

export const GetProfileTitle = styled.h2`
  font-size: 28px;
  color: #222;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ddd;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 18px;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  text-align: center;
`;