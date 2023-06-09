import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>ToyCarLand | {title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
