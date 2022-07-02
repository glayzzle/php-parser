// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/008.phpt
  it("Return type covariance in interface implementation", function () {
    expect(parser.parseCode("<?php\ninterface foo {\n    public function bar() : foo;\n}\nclass qux implements foo {\n    public function bar() : qux {\n        return $this;\n    }\n}\n$qux = new qux();\necho get_class($qux->bar());\n?>")).toMatchSnapshot();
  });
});
