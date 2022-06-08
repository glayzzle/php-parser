// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/installed.phpt
  it("Check for sodium presence", function () {
    expect(parser.parseCode("<?php\necho \"sodium extension is available\";\n/*\n        you can add regression tests for your extension here\n  the output of your test code has to be equal to the\n  text in the--EXPECT-- section below for the tests\n  to pass, differences between the output and the\n  expected text are interpreted as failure\n*/\n?>")).toMatchSnapshot();
  });
});
