// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69537.phpt
  it("Bug #69537 (__debugInfo with empty string for key gives error)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __debugInfo(){\n        return ['' => 1];\n    }\n}\nvar_dump(new Foo);\n?>")).toMatchSnapshot();
  });
});
