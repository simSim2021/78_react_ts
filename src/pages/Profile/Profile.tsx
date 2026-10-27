import { useContext } from "react";

import {InputContext2 } from "../../components/Layout/Layout";

import {
  ProfileWrapper,
  ProfileTitle,
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileInfo,
  NoProfileMessage,
} from "./styles";

function Profile() {
  const { user } = useContext(InputContext2);

  if (!user) {
    return (
      <ProfileWrapper>
        <NoProfileMessage>
          No user profile available
        </NoProfileMessage>
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ProfileTitle>User Profile</ProfileTitle>

      <ProfileCard>
        <ProfileImage
          src={user.picture.large}
          alt="User"
        />

        <ProfileName>
          {user.name.first} {user.name.last}
        </ProfileName>

        <ProfileInfo>Gender: {user.gender}</ProfileInfo>

        <ProfileInfo>Email: {user.email}</ProfileInfo>

        <ProfileInfo>
          Country: {user.location.country}
        </ProfileInfo>

        <ProfileInfo>Phone: {user.phone}</ProfileInfo>
      </ProfileCard>
    </ProfileWrapper>
  );
}

export default Profile;