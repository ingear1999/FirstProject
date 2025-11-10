import React from "react";
import InitialPage from "./InitialPage";
import InitialPage2 from "./InitialPage2";

function PageAlignment() {
  return (
    <div>
      <div className="InitialPage">
        <InitialPage />
      </div>
      <div className="InitialPage2">
        <InitialPage2 />
      </div>
    </div>
  );
}

export default PageAlignment;
