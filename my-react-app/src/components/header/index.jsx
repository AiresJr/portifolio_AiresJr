import { useNavigate } from "react-router-dom";
import dropdown from "../../assets/dropdown.svg";
import { StyledHeader } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  const pageReload = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <button onClick={() => pageReload()}>Aires Jr</button>
      <img src={dropdown} alt="dropdown" />
    </StyledHeader>
  );
};
