import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";

//Evergreen
import { Heading, Pane, Tab, Tablist } from "evergreen-ui";

const Header: FunctionComponent<any> = (props) => {
  const history = useHistory();

  const [navOptionIndex, setNavOptionIndex] = useState<number | undefined>(0);

  const navigateTo = (tabIndex: number) => {
    setNavOptionIndex(tabIndex);
    switch (tabIndex) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/");
        break;
      default:
        history.push(`/`);
      // history.push(`/${navOptions[tabIndex]}`)
    }
  };

  const navOptions = ["Feed", "Create"];

  return (
    <Pane display="flex" justifyContent="space-between" flexDirection="row" alignItems="center" padding={40}>
      <Heading size={600} fontSize={"50px"} className="header-title">Helium 10</Heading>
      <Tablist display="flex" flexDirection="row" justifyContent="space-evenly">
        {navOptions.map((tab, index) => (
          <Tab
            key={"tab-" + tab}
            id={tab}
            onSelect={() => navigateTo(index)}
            isSelected={index === navOptionIndex}
            aria-controls={`panel-${tab}`}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
    </Pane>
  );
};

export default Header;
