import {
    matcherHint,
    printExpected,
    printReceived,
  } from "jest-matcher-utils";
  
  export const toContainText = (
    received,
    expectedText
  ) => {
    const pass =
      received.textContent.includes(expectedText);
  
    const sourceHint = () =>
      matcherHint(
        "toContainText",
        "element",
        printExpected(expectedText),
        { isNot: pass }
      );
  
    const actualTextHint = () =>
      "Actual text: " +
      printReceived(received.textContent);
  
    const message = () =>
      [sourceHint(), actualTextHint()].join("\n\n");
  
    return { pass, message };
  };



  import { toContainText } from "./toContainText";

describe("toContainText matcher", () => {
  const stripTerminalColor = (text) =>
    text.replace(/\x1B\[\d+m/g, "");

  it("returns pass is true when text is found in the given DOM element", () => {
    const domElement = {
      textContent: "text to find",
    };
    const result = toContainText(
      domElement,
      "text to find"
    );
    expect(result.pass).toBe(true);
  });

  it("return pass is false when the text is not found in the given DOM element", () => {
    const domElement = { textContent: "" };
    const result = toContainText(
      domElement,
      "text to find"
    );
    expect(result.pass).toBe(false);
  });

  it("returns a message that contains the source line if no match", () => {
    const domElement = { textContent: "" };
    const result = toContainText(
      domElement,
      "text to find"
    );
    expect(
      stripTerminalColor(result.message())
    ).toContain(
      `expect(element).toContainText("text to find")`
    );
  });

  it("returns a message that contains the source line if negated match", () => {
    const domElement = {
      textContent: "text to find",
    };
    const result = toContainText(
      domElement,
      "text to find"
    );
    expect(
      stripTerminalColor(result.message())
    ).toContain(
      `expect(element).not.toContainText("text to find")`
    );
  });

  it("returns a message that contains the actual text", () => {
    const domElement = {
      textContent: "text to find",
    };
    const result = toContainText(
      domElement,
      "text to find"
    );
    expect(
      stripTerminalColor(result.message())
    ).toContain(`Actual text: "text to find"`);
  });
});


import {
    matcherHint,
    printExpected,
    printReceived,
  } from "jest-matcher-utils";
  
  export const toHaveClass = (
    received,
    expectedClass
  ) => {
    const pass =
      received.className.includes(expectedClass);
  
    const sourceHint = () =>
      matcherHint(
        "toHaveClass",
        "element",
        printExpected(expectedClass),
        { isNot: pass }
      );
  
    const actualTextHint = () =>
      received.className === ""
        ? "Actual classes: " + printReceived([])
        : "Actual classes: " +
          printReceived(received.className.split(" "));
  
    const message = () =>
      [sourceHint(), actualTextHint()].join("\n\n");
  
    return { pass, message };
  };


 import { toContainText } from "./toContainText";
 describe("toContainText matcher", () => {
  it("returns pass is true when text is found in the 
 given DOM element", () => {
  const domElement = {
  textContent: "text to find"
  };
  const result = toContainText(
  domElement,
  "text to find"
 );
 expect(result.pass).toBe(true);
 });
});

export const toContainText = (
    received,
    expectedText
   ) => ({
    pass: true
   });

   it("returns a message that contains the source line if 
negated match", () => {
 const domElement = { textContent: "text to find" };
 const result = toContainText(
 domElement,
 "text to find"
 );
 expect(
 stripTerminalColor(result.message())
 ).toContain(
 `expect(container).not.toContainText("text to find")`
 );
});