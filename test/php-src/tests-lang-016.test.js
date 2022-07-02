// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/016.phpt
  it("Testing user-defined function in included file", function () {
    expect(parser.parseCode("<?php\ninclude \"016.inc\";\nMyFunc(\"Hello\");\n?>")).toMatchSnapshot();
  });
});
