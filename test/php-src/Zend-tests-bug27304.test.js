// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug27304.phpt
  it("Bug #27304 (Static functions don't function properly)", function () {
    expect(parser.parseCode("<?php\nclass Staticexample\n{\n    static function test()\n    {\n        var_dump(isset($this));\n    }\n}\n$b = new Staticexample();\nStaticexample::test();\n$b->test();\n?>")).toMatchSnapshot();
  });
});
