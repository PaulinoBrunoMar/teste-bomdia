import { useState } from "react";
import { Container, Menu, Option } from "./style";
import PersonalData from "../personalData";
import ProfessionalData from "../professionalData";
import AccessData from "../accessData";

export default function EditPanel() {
  const [personalData, setPersonalData] = useState(true);
  const [professionalData, setProfessionalData] = useState(false);
  const [accessData, setAccessData] = useState(false);

  const handleTabDataActive = (tab) => {
    const liArray = document.querySelectorAll("li");
    liArray.forEach((li) => {
      li.classList.remove("active");
    });

    if (tab.target.innerText === "Dados Pessoais") {
      setPersonalData(true);
      setProfessionalData(false);
      setAccessData(false);
    } else if (tab.target.innerText === "Dados Profissionais") {
      setPersonalData(false);
      setProfessionalData(true);
      setAccessData(false);
    } else if (tab.target.innerText === "Dados de Acesso") {
      setPersonalData(false);
      setProfessionalData(false);
      setAccessData(true);
    }

    tab.target.classList.add("active");
  };

  return (
    <Container>
      <Menu>
        <Option onClick={(e) => handleTabDataActive(e)}>
          <h3>Dados Pessoais</h3>
        </Option>
        <Option onClick={(e) => handleTabDataActive(e)}>
          <h3>Dados Profissionais</h3>
        </Option>
        <Option onClick={(e) => handleTabDataActive(e)}>
          <h3>Dados de Acesso</h3>
        </Option>
      </Menu>
      {personalData && <PersonalData />}
      {professionalData && <ProfessionalData />}
      {accessData && <AccessData />}
    </Container>
  );
}
