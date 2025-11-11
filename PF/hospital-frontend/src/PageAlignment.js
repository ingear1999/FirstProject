import React from "react";
import InitialPage from "./InitialPage";
import InitialPage2 from "./InitialPage2";
import AuthButtons from "./AuthButtons";

function PageAlignment() {
  return (
    <div>
      <div className="InitialPage">
          <InitialPage />
      </div>
      <div className="InitialPage2">
          <InitialPage2 />
      </div>
      <div className="AuthButtons">
          <AuthButtons />
      </div>
    </div>
  );
}

export default PageAlignment;
