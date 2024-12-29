"use client";
import SecurityDashboard from "@/components/app-security-view";
import Appsidebar from "@/components/global/app-sidebar";
import React from "react";

const Securityview = () => {
  return (
    <Appsidebar first="AndroidArmour" second="security">
      <SecurityDashboard />
    </Appsidebar>
  );
};

export default Securityview;
