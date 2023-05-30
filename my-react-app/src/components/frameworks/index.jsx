import reactjs from "../../assets/reactjs.svg";
import css from "../../assets/css.svg";
import html5 from "../../assets/html5.svg";
import js from "../../assets/js.svg";
import typescript from "../../assets/typescript.svg";
import { StyldLi, StyledDiv, StyledUl } from "./styles";

export const Frameworks = () => {
  const listFrameworks = [
    {
      id: 1,
      name: "Html",
      img: html5,
    },
    {
        id: 2,
        name: "CSS",
        img: css,
    },
    {
        id: 3,
        name: "JavaScript",
        img: js,
    },
    {
        id: 4,
        name: "TypeScript",
        img: typescript,
    },
    {
      id: 5,
      name: "React.Js",
      img: reactjs,
    },
];

  return (
    <StyledDiv>
      <h1>Linguagens e Frameworks</h1>
      <StyledUl>
        {listFrameworks.map((framework) => (
          <StyldLi key={framework.id}>
            <img src={framework.img} alt={framework.name} />
            <nav>{framework.name}</nav>
          </StyldLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
};
