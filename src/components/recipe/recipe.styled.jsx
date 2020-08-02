import styled from "styled-components";

const btnStyles = `transition: all 0.3s;
padding: 1rem;
background-color: var(--color-text);

&:focus {
  outline: none;
}

&:hover {
  background-color:var(--color-secondary);
  & svg{
    fill:var(--color-text);
  }
}

svg {
  width: 2.6rem;
  height: 2.6rem;
}`;

export const BtnStyled = styled.button`
  ${btnStyles}
  svg {
    fill: ${(props) => props.inputcolor || "var(--color-secondary)"};
  }
`;

export const LinkStyled = styled.a`
  ${btnStyles}
  svg {
    fill: ${(props) => props.inputcolor || "var(--color-secondary)"};
  }
`;

export const Floater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-text);
  border-radius: 0.5rem;
  overflow: hidden;

  position: fixed;
  top: 20rem;
  right: 10rem;

  @media only screen and (max-width: 786px) {
    top: 20rem;
    right: 2rem;
  }

  @media only screen and (max-width: 500px) {
    top: 40rem;
    right: 2rem;
  }
`;
