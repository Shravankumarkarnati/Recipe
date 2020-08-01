import styled from "styled-components";

const btnStyles = `transition: all 0.3s;
padding: 1rem;

&:focus {
  outline: none;
}

&:hover {
  background-color: #d6d7df;

  & svg{
    fill:black;
  }
}

svg {
  fill:var(--color-orange);
  width: 2.6rem;
  height: 2.6rem;
}`;

export const BtnStyled = styled.button`
  ${btnStyles}
  svg {
    fill: ${(props) => props.inputcolor || "var(--color-orange)"};
  }
`;

export const LinkStyled = styled.a`
  ${btnStyles}
`;

export const Floater = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 0.5rem;
  overflow: hidden;

  position: fixed;
  top: 20rem;
  right: 20rem;
`;
