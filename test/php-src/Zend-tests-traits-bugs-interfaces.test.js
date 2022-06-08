// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/interfaces.phpt
  it("Make sure trait does not implement an interface.", function () {
    expect(() => parser.parseCode("<?php\nerror_reporting(E_ALL);\ninterface MyInterface {\n    public function a();\n}\ntrait THello implements MyInterface {\n  public function a() {\n    echo 'A';\n  }\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
