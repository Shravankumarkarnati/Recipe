import styled from "styled-components";

export const SearchContainerStyled = styled.div`
  width: 60%;
  box-shadow: 0rem 0.05rem 1rem ${(props) => props.theme.colorPrimary};
  border-radius: 1rem;
  padding: 0.3rem 2rem;

  display: flex;
  background-color: ${(props) =>
    props.bg ? props.theme.colorSecondary : props.theme.colorGrey};
  margin: 2rem auto;
  box-shadow: 0rem 0.05rem 0.5rem ${(props) => props.theme.colorSecondary};

  & input {
    height: 100%;
    width: 100%;
    font-size: ${(props) => props.font || "3rem"};
    padding: 1rem 3rem;
    border: none;
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) =>
      props.bg === true ? props.theme.colorSecondary : props.theme.colorGrey};

    font-weight: 500;
    letter-spacing: 0.1rem;
    word-spacing: 0.5rem;
    text-transform: capitalize;

    &::placeholder {
      letter-spacing: 0.1rem;
      color: rgba(${(props) => props.theme.colorPrimary}, 0.8);
      text-align: center;
      text-transform: capitalize;
    }

    &:focus {
      outline: none;
    }
  }

  & svg {
    width: 4rem;
    fill: ${(props) => props.theme.colorPrimary};
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const BtnMain = styled.button`
  font-size: ${(props) => props.font || "2rem"};
  font-weight: 500;
  text-transform: lowercase;
  padding: 0.5rem 1.5rem;
  color: ${(props) => props.theme.colorSecondary};
  margin: 2rem 0;
  border: 0.2rem solid ${(props) => props.theme.colorQuaternary};
  background: ${(props) => props.theme.colorTeritary};
  border-radius: 0.5rem;
  box-shadow: 0rem 0.05rem 0.5rem ${(props) => props.theme.colorSecondary};
  transition: box-shadow 0.4s;

  &:hover,
  &:focus {
    outline: white;
    opacity: 0.9;
    box-shadow: none;
  }
`;

export const FormStyled = styled.form`
  display: ${(props) => props.display || null};
  align-items: center;
  justify-content: center;
`;
