// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/include_variation1.phpt
  it("include() a file from the current script directory", function () {
    expect(parser.parseCode("<?php\ninclude(\"inc.inc\");\n?>")).toMatchSnapshot();
  });
});
