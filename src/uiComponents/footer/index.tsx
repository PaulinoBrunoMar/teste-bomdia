import { Item, NavFooter } from "./style";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <NavFooter>
      <Item>
        <FaRegCopyright />
        Grupo Bomdia. Todos os direitos reservados.
      </Item>
    </NavFooter>
  );
}
