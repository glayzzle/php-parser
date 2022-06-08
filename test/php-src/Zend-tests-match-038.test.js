// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/038.phpt
  it("Test multiple default arms in match in different arms", function () {
    expect(parser.parseCode("<?php\nmatch (1) {\n    default => 'foo',\n    1 => 'bar',\n    2 => 'baz',\n    default => 'qux',\n};\n?>")).toMatchSnapshot();
  });
});
