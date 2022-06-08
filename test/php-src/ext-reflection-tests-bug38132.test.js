// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug38132.phpt
  it("Reflection Bug #38132 (ReflectionClass::getStaticProperties() retains \\0 in key names)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static protected $bar = 'baz';\n    static public $a = 'a';\n}\n$class = new ReflectionClass('foo');\n$properties = $class->getStaticProperties();\nvar_dump($properties, array_keys($properties));\nvar_dump(isset($properties['*bar']));\nvar_dump(isset($properties[\"\\0*\\0bar\"]));\nvar_dump(isset($properties[\"bar\"]));\n?>")).toMatchSnapshot();
  });
});
