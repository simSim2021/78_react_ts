import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  min-height: 400px;
  padding: 30px;
`;

export const ProfileTitle = styled.h2`
  font-size: 28px;
  color: #222;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 320px;
  max-width: 100%;
  padding: 25px;
  border-radius: 12px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  color: #222;
`;

export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileName = styled.h3`
  font-size: 24px;
  margin: 10px 0;
`;

export const ProfileInfo = styled.p`
  font-size: 16px;
  margin: 5px 0;
  overflow-wrap: anywhere;
  max-width: 100%;
  text-align: center;
`;

export const NoProfileMessage = styled.p`
  font-size: 18px;
  color: #777;
`;