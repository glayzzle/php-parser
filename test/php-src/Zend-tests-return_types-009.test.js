// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/009.phpt
  it("Return type covariance error", function () {
    expect(parser.parseCode("<?php\ninterface foo {\n    public function bar() : foo;\n}\ninterface biz {}\nclass qux implements foo {\n    public function bar() : biz {\n        return $this;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
