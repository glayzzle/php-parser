// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/005.phpt
  it("Match expression discarding result", function () {
    expect(parser.parseCode("<?php\nmatch (1) {\n    1 => print \"Executed\\n\",\n};\n?>")).toMatchSnapshot();
  });
});
