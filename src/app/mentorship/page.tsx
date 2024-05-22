"use client";

import config from "@/config";
import { useEffect } from "react";

const Mentorship = () => {
  useEffect(() => {
    window.location.href = `https://${config.domainName}#pricing`;
  }, []);
  return <div></div>;
};
export default Mentorship;
