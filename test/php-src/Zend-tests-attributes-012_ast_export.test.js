// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/012_ast_export.phpt
  it("Attributes AST can be exported.", function () {
    expect(parser.parseCode("<?php\nassert(0 && ($a = #[A1] #[A2] function ($a, #[A3(1)] $b) { }));\nassert(0 && ($a = #[A1(1, 2, 1 + 2)] fn () => 1));\nassert(0 && ($a = new #[A1] class() {\n    #[A1]#[A2] const FOO = 'foo';\n    #[A2] public $x;\n    #[A3] function a() { }\n}));\nassert(0 && ($a = function () {\n    #[A1] class Test1 { }\n    #[A2] interface Test2 { }\n    #[A3] trait Test3 { }\n}));\n?>")).toMatchSnapshot();
  });
});
