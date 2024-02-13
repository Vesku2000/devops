import React from "react";
import ReactDOM from "react-dom/client";
import { PresentationDayView } from "./AppointmentsDayView";
import { samplePresentations } from "./samplePresentations";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <PresentationDayView
    appointments={samplePresentations}
  />
);