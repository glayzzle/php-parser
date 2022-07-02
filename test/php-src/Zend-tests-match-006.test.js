// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/006.phpt
  it("Match expression with no cases", function () {
    expect(parser.parseCode("<?php\n$x = match (true) {};\n?>")).toMatchSnapshot();
  });
});
