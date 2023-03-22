import styled from "styled-components";
import logo from "../assets/images/2logo.png"

const Container = styled.h1`

`;

function Header() {
  return( <Container>
<img src={logo} alt="" />
    </Container>);
}


export default Header;
