import React from "react";
import AmbassadorAnalytics from "./AmbassadorAnalytics";
import Analytics from "./Analytics";
import { AppShell } from "./AppShell";
import CreatePoll from "./CreatePoll";

export default function App() {
  return (
    <AppShell>
      <Analytics />
      {/* <CreatePoll /> 
      <AmbassadorAnalytics /> */}
    </AppShell>
  );
}
