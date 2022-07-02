// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65291.phpt
  it("Bug #65291 - get_defined_constants() causes PHP to crash in a very limited case.", function () {
    expect(parser.parseCode("<?php\ntrait TestTrait\n{\n    public static function testStaticFunction()\n    {\n        return __CLASS__;\n    }\n}\nclass Tester\n{\n    use TestTrait;\n}\n$foo = Tester::testStaticFunction();\nget_defined_constants();\nget_defined_constants(true);\necho $foo;\n?>")).toMatchSnapshot();
  });
});
