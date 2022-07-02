// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug29538.phpt
  it("Bug #29538 (number_format and problem with 0)", function () {
    expect(parser.parseCode("<?php\n    echo number_format(0.25, 2, '', ''), \"\\n\";\n    echo number_format(1234, 2, '', ',');\n?>")).toMatchSnapshot();
  });
});
