// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/hebrev_basic.phpt
  it("Test hebrev() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hebrev() : basic functionality ***\\n\";\n$hebrew_text = \"The hebrev function converts logical Hebrew text to visual text.\\nThe function tries to avoid breaking words.\\n\";\nvar_dump(hebrev($hebrew_text));\nvar_dump(hebrev($hebrew_text, 15));\n?>")).toMatchSnapshot();
  });
});
