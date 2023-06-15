import { Link } from "react-scroll";
import { StyledDiv, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>AIRES JR</h1>
      <StyledDiv>
        <li className="">
          <Link to="introduction" spy={true} smooth={true} offset={0} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="hability" spy={true} smooth={true} offset={-50} duration={500}>
            HABILIDADES
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
            PROJETOS
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
            CONTATO
          </Link>
        </li>
      </StyledDiv>
    </StyledHeader>
  );
};
