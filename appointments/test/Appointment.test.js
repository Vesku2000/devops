import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment } from "../src/Appointment";
import { act } from "react-dom/test-utils";

it("renders the student first name", () => {
    const student = { studentname: "Valtteri" };
    const component = (
    <Appointment student={student} />
    );
    const container = document.createElement("div");
    document.body.replaceChildren(container);
    act(() =>
        ReactDOM.createRoot(container).render(component)
        );
    expect(document.body.textContent).toContain(
    "Ashley"
    );
   });

   it("renders another student first name", () => {
    const student = { studentname: "Toni" };
    const component = (
    <Appointment student={student} />
    );
    const container = document.createElement("div");
 document.body.replaceChildren(container);
 act(() =>
 ReactDOM.createRoot(container).render(component)
 );
 expect(document.body.textContent).toContain(
 "Jordan"
 );
});