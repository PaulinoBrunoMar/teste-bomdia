import { useState } from "react";
import { Container, Menu, Option } from "./style";
import PersonalData from "../personalData";
import ProfessionalData from "../professionalData";
import AccessData from "../accessData";

export default function EditPanel() {
  const [personalData, setPersonalData] = useState<boolean>(true);
  const [professionalData, setProfessionalData] = useState<boolean>(false);
  const [accessData, setAccessData] = useState<boolean>(false);

  const handleTabDataActive = (tab: any) => {
    const liArray = document.querySelectorAll("li");
    liArray.forEach((li) => {
      li.classList.remove("active");
    });

    if (tab.target.innerText === "Dados Pessoais") {
      setPersonalData(true);
      setProfessionalData(false);
      setAccessData(false);
    } else if (tab.target.innerText === "AberDados Profissionaistos") {
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
        <Option onClick={(e: any) => handleTabDataActive(e)}>
          <li>Dados Pessoais</li>
        </Option>
        <Option>
          <li>Dados Profissionais</li>
        </Option>
        <Option>
          <li>Dados de Acesso</li>
        </Option>
      </Menu>
      {personalData && <PersonalData />}
      {professionalData && <ProfessionalData />}
      {accessData && <AccessData />}
    </Container>
  );
}
