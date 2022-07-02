// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78344.phpt
  it("Bug #78344: Segmentation fault on zend_check_protected", function () {
    expect(parser.parseCode("<?php\nclass A {\n    protected const FOO = 1;\n}\nclass B {}\nclass C extends B {\n    public function method() {\n        var_dump(A::FOO);\n    }\n}\n(new C)->method();\n?>")).toMatchSnapshot();
  });
});
