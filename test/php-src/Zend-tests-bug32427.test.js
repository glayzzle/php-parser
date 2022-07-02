// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32427.phpt
  it("Bug #32427 (Interfaces are not allowed 'static' access modifier)", function () {
    expect(parser.parseCode("<?php\ninterface Example {\n    public static function sillyError();\n}\nclass ExampleImpl implements Example {\n    public static function sillyError() {\n        echo \"I am a silly error\\n\";\n    }\n}\nExampleImpl::sillyError();\n?>")).toMatchSnapshot();
  });
});
