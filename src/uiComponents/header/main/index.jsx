import { useState } from "react";
import { NavHeader } from "./style";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDownMenu from "../dropDownMenu";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <NavHeader>
        <div id="user-photo">
          <img
            src="https://avatars.githubusercontent.com/u/13?v=4"
            alt="user"
          />
        </div>

        <div id="greetings">
          <span>
            Bem vindo, <strong>User</strong>
          </span>

          <IoMdArrowDropdown
            onClick={() => setDropDown(!dropDown)}
            id="arrow-drop-down"
            size={35}
          />
        </div>
      </NavHeader>

      {dropDown && <DropDownMenu />}
    </>
  );
}
