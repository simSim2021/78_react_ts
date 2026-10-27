import { useContext, useState } from "react";
import axios from "axios";

import {InputContext2 } from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import type { UserProfile } from "../../components/Layout/types";

import {
  GetProfileWrapper,
  GetProfileTitle,
  Spinner,
  SuccessMessage,
  ErrorMessage,
} from "./styles";

function GetProfile() {
  const { setUser } = useContext(InputContext2);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const getUserProfile = async () => {
    setIsLoading(true);
    setError("");
    setSuccess(false);
    setUser(null);

    try {
      const response = await axios.get<{
        results: UserProfile[];
      }>("https://randomuser.me/api/");

      if (!response.data.results?.[0]) {
        throw new Error("User data not found");
      }

      setUser(response.data.results[0]);
      setSuccess(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GetProfileWrapper>
      <GetProfileTitle>Get Profile</GetProfileTitle>

      <Button
        name="GET USER PROFILE"
        onClick={getUserProfile}
      />

      {isLoading && <Spinner />}

      {success && (
        <SuccessMessage>
          Data successfully retrieved. Go to the profile page.
        </SuccessMessage>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </GetProfileWrapper>
  );
}

export default GetProfile;