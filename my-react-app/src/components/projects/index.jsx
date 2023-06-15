import { useEffect } from "react";
import { Link } from "react-router-dom";
import gitsearch from "../../assets/gitsearch.svg";
import hamburgueria from "../../assets/hamburgueria.svg";
import linkkeeper from "../../assets/linkkeeper.svg";
import nukenzie from "../../assets/nukenzie.svg";
import { StyledDiv, StyledLi, StyledLinks, StyledUl } from "./styles";
import ScrollReveal from 'scrollreveal';

export const Projects = () => {

  useEffect(() => {
    ScrollReveal().reveal('.reveal', { duration: 3000, reset: true });
  }, []);
  const listProjects = [
    {
      id: 1,
      name: "Hamburgueria",
      img: hamburgueria,
      linkDeploy: "https://hamburgueria-ten-eosin.vercel.app",
      linkGitHub: "https://github.com/AiresJr/react-entrega-template-hamburgueria-da-kenzie_AiresJr",
    },
    {
      id: 2,
      name: "GitSearch",
      img: gitsearch,
      linkDeploy: "https://git-search-wheat.vercel.app",
      linkGitHub: "https://github.com/AiresJr/-Kenzie-Academy-Brasil-Developers-gitSearchBase_AiresJr",
    },
    {
      id: 3,
      name: "Nu Kenzie",
      img: nukenzie,
      linkDeploy: "https://nukenzie-airesjr.vercel.app",
      linkGitHub: "https://github.com/AiresJr/-Kenzie-Academy-Brasil-Developers-react-entrega-s1-template-nu-kenzie_AiresJr",
    },
    {
      id: 4,
      name: "Link Keeper",
      img: linkkeeper,
      linkDeploy: "https://linkkeeper-app-delta.vercel.app",
      linkGitHub: "https://github.com/AiresJr/linkkeeper-app",
    },
  ];

  return (
    <StyledDiv className="reveal" id="projects">
      <h1>Meus Projetos</h1>
      <StyledUl>
        {listProjects.map((project) => (
          <StyledLi key={project.id}>
            <nav>{project.name}</nav>
            <img src={project.img} alt={project.name} />
            <StyledLinks>
              <Link to={project.linkDeploy} target="_blank">
                Link do Vercel
              </Link>
              <Link to={project.linkGitHub} target="_blank">
                Link do GitHub
              </Link>
            </StyledLinks>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
};
