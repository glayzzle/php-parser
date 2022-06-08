// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug28633.phpt
  it("Bug #28633 (sprintf incorrectly adding padding to floats)", function () {
    expect(parser.parseCode("<?php\n    echo sprintf(\"%05.2f\", 0.02) . \"\\n\";\n    echo sprintf(\"%05.2f\", 2.02) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
