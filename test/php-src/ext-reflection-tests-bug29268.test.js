// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug29268.phpt
  it("Reflection Bug #29268 (__autoload() not called with reflectionProperty->getClass())", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($classname) {\n    echo \"__autoload($classname)\\n\";\n    eval(\"class $classname {}\");\n});\nclass B{\n    public function doit(A $a){\n    }\n}\n$ref = new reflectionMethod('B','doit');\n$parameters = $ref->getParameters();\nforeach($parameters as $parameter)\n{\n    $class = $parameter->getClass();\n    echo $class->name.\"\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
