// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug74673.phpt
  it("Bug #74673 (Segfault when cast Reflection object to string with undefined constant)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function method($test = PHP_SELF + 1)\n    {\n    }\n}\n$class = new ReflectionClass('A');\necho $class;\n?>")).toMatchSnapshot();
  });
});
