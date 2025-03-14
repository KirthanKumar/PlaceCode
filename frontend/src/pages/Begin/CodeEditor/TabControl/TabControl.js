import React, { useState } from "react";
import { Tabs, Tab } from "@components/Tabs";

export const TabControl = ({ disabled }) => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={(e, newValue) => setTab(newValue)}
      >
        <Tab disabled={disabled} label="Editor" />
        <Tab disabled={disabled} label="Console" />
      </Tabs>
    </div>
  );
};
