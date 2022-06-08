// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug49866.phpt
  it("Bug #49866 (Making reference on string offsets crashes PHP)", function () {
    expect(parser.parseCode("<?php\n$a = \"string\";\n$b = &$a[1];\n$b = \"f\";\necho $a;\n?>")).toMatchSnapshot();
  });
});
