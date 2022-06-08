// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41401.phpt
  it("Bug #41401 (wrong precedence for unary minus)", function () {
    expect(parser.parseCode("<?php\necho 1/-2*5;\necho \"\\n\";\necho 6/+2*-3;\n?>")).toMatchSnapshot();
  });
});
