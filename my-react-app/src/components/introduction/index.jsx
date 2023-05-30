import email1 from "../../assets/email1.svg";
import github1 from "../../assets/github1.svg";
import likedin1 from "../../assets/likedin1.svg";
import profile from "../../assets/profile.svg";
import { StyledDivMedias, StyledImg, StyledIntroducion, StyledMedias } from "./styles";

export const Introduction = () => {
  return (
    <>
      <StyledIntroducion>
        <h1>Front-End Developer</h1>
        <p>
          Sempre me interessei pelo mundo à parte que o meu primeiro computador me proporcionava, através do meu computador, a tecnologia
          fez com que eu me sentisse seguro e curioso para entender como que este mundo tão maravilhoso funcionava.
        </p>
        <p>Meu compromisso com a tecnologia é trazer soluções de forma criativa e inovadora, facilitando a vida das pessoas!</p>
      </StyledIntroducion>
      <StyledDivMedias>
        <StyledMedias>
          <img src={email1} alt="email" />
          <img src={github1} alt="github" />
          <img src={likedin1} alt="likedin" />
        </StyledMedias>
        <StyledImg>
          <img src={profile} alt="Profile" />
        </StyledImg>
      </StyledDivMedias>
    </>
  );
};
