import React from "react";

function Tabs({ children, buttons, ButtonContainers }) {
  return (
    <>
      <ButtonContainers>
            {buttons}
      </ButtonContainers>
      {children}
    </>
  );
}

export default Tabs;
