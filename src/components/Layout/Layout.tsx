import { Link, useNavigate } from "react-router-dom";

import {
  ButtonWrapper,
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import type { InputContextType, InputContextType2, LayoutProps, UserProfile } from "./types";
import LogoImg from "../../assets/avatar.jpg";
import Button from "../Button/Button";
import { createContext, useState } from "react";

export const InputContext = createContext<InputContextType>({
  data: "",
  onDataChange: ()=>{}
})

export const InputContext2 = createContext<InputContextType2>({
  data: "",
  onDataChange: () => {},
  user: null,
  setUser: () => {},
});

function Layout({ children }: LayoutProps) {
const [inputResult, setInputResult] = useState<string>("");

const [inputResult2, setInputResult2] = useState<string>("");

  const [user, setUser] = useState<UserProfile | null>(null);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
     <InputContext.Provider
      value={{
        data: inputResult,
        onDataChange: setInputResult,
      }}
    >
      <InputContext2.Provider
  value={{
    data: inputResult2,
    onDataChange: setInputResult2,
    user: user,
    setUser: setUser,
  }}
>
    <LayoutComponent>
      <Header>
        <Link to="/">
          <Logo src={LogoImg} />
        </Link>
        <ButtonWrapper>
          <Button name="<---" onClick={onBack} />
        </ButtonWrapper>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-05"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson05
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-06"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson06
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-07"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson07
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-08"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson08
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-09"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson09
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-10"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson10
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-11"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson11
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-12"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson12
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/lesson-15"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson15
          </StyledNavLink>
          <StyledNavLink
            to="/get-profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Get Profile
          </StyledNavLink>
          <StyledNavLink
            to="/profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Profile
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </LayoutComponent>
    </InputContext2.Provider>
    </InputContext.Provider>
    
  );
}
export default Layout;
