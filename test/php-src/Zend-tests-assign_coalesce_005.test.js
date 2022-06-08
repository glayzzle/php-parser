// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_005.phpt
  it("Coalesce assign (??=): Cannot reassign $this", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function foobar() {\n        $this ??= 123;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
