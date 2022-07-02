// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34786.phpt
  it("Bug #34786 (2 @ results in change to error_reporting() to random value)", function () {
    expect(parser.parseCode("<?php\nfunction foo($a,$b,$c) {\necho \"foo: \".error_reporting().\"\\n\";\n}\nfunction bar() {\necho \"bar: \".error_reporting().\"\\n\";\n}\nerror_reporting(E_WARNING);\necho \"before: \".error_reporting().\"\\n\";\n@foo(1,@bar(),3);\necho \"after: \".error_reporting().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
