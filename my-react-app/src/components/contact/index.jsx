import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import likedin from "../../assets/likedin.svg";
import github from "../../assets/github.svg";
import { Link } from "react-router-dom";
import { StyledDiv, StyledLi, StyledUl, TotalDiv } from "./styles";

export const Contact = () => {
  return (
    <TotalDiv id="contact">
        <h1>Entre em Contato</h1>
      <StyledDiv>
        <p>Estou disponível para novos projetos. Entre em contato e marcamos uma conversa.</p>

        <StyledUl>
          <StyledLi>
            <img src={email} alt="email" />
            <Link to="mailto:airesjunior96@outlook.com">airesjunior96@outlook.com</Link>
          </StyledLi>
          <StyledLi>
            <img src={phone} alt="phone" />
            <Link to="https://web.whatsapp.com/send?phone=5592992980502" target="_blak">
              +55 92 99298-0502
            </Link>
          </StyledLi>
          <StyledLi>
            <img src={likedin} alt="likedin" />
            <Link to="https://www.linkedin.com/in/aires-junior/" target="_blank">
              LinkedIn
            </Link>
          </StyledLi>
          <StyledLi>
            <img src={github} alt="github" />
            <Link to="https://github.com/AiresJr/" target="_blak">
              GitHub
            </Link>
          </StyledLi>
        </StyledUl>
      </StyledDiv>
    </TotalDiv>
  );
};
