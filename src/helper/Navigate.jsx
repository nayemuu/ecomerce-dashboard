import React from "react";
import { Link } from "react-router-dom";

function Navigate({ children, href }) {
  return <Link to={href}>{children}</Link>;
}

export default Navigate;
