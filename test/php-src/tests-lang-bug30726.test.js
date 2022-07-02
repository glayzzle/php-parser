// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug30726.phpt
  it("Bug #30726 (-.1 like numbers are not being handled correctly)", function () {
    expect(parser.parseCode("<?php\necho (int) is_float('-.1' * 2), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
