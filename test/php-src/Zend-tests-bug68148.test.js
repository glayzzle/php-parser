// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68148.phpt
  it("Bug #68148: $this is null inside include", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        eval('var_dump($this);');\n    }\n}\n(new Test)->method();\n?>")).toMatchSnapshot();
  });
});
