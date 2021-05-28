import React, { FC } from "react";

interface AlertsProps {
  error: string;
}

export const AlertComp: FC<AlertsProps> = ({ error }) => (
  <div className={`alert alert-danger`}>{error}</div>
);
