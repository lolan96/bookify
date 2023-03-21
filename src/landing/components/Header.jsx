import styled from "styled-components";

const Container = styled.h1`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return <Container>Bookify</Container>;
}

export default Header;
