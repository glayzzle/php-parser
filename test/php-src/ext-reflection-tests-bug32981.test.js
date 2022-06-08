// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug32981.phpt
  it("Reflection Bug #32981 (ReflectionMethod::getStaticVariables() causes apache2.0.54 seg fault)", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    static function test()\n    {\n        static $enabled = true;\n    }\n}\n$class = new ReflectionClass('TestClass');\nforeach ($class->getMethods() as $method)\n{\n    var_dump($method->getName());\n    $arr_static_vars[] = $method->getStaticVariables();\n}\nvar_dump($arr_static_vars);\n?>")).toMatchSnapshot();
  });
});
