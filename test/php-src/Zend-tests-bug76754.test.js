// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76754.phpt
  it("Bug #76754 (parent private constant in extends class memory leak)", function () {
    expect(parser.parseCode("<?php\nclass FOO\n{\n    private const FOO = 'BAR';\n}\nclass BAR extends FOO { }\n?>\nokey")).toMatchSnapshot();
  });
});
