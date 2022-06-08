// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug63614.phpt
  it("Bug #63614 (Fatal error on Reflection)", function () {
    expect(parser.parseCode("<?php\nfunction dummy() {\n   static $a = array();\n}\nclass Test\n{\n    const A = 0;\n    public function func()\n    {\n        static $a  = array(\n            self::A   => 'a'\n        );\n    }\n}\n$reflect = new ReflectionFunction(\"dummy\");\nprint_r($reflect->getStaticVariables());\n$reflect = new ReflectionMethod('Test', 'func');\nprint_r($reflect->getStaticVariables());\n?>")).toMatchSnapshot();
  });
});
