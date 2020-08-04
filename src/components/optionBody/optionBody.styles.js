import styled from "styled-components";

export const Body = styled.div`
  grid-row: 2/3;
  grid-column: 1/-1;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colorSecondary};
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const OptionBox = styled.p`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 1rem;
  color: ${(props) => props.theme.colorPrimary};
  margin: 2rem 0;
  position: relative;

  & .notif {
    position: absolute;
    top: 0;
    right: 0rem;
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${(props) => props.theme.colorPrimary};
    border-radius: 50%;
  }

  &:hover {
    color: ${(props) => props.theme.colorSecondary};
    background-color: ${(props) => props.theme.colorPrimary};
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 750px) {
    font-size: 4rem;
  }
`;
