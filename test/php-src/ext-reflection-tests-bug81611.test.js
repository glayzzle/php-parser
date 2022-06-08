// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug81611.phpt
  it("Reflection Bug #81611 (ArgumentCountError when getting default value from ReflectionParameter with new)", function () {
    expect(parser.parseCode("<?php\nclass Bar\n{\n}\nclass Foo extends Bar\n{\n    public function doFoo(object $test = new self()): object\n    {\n        return $test;\n    }\n    public function doBar(object $test = new parent()): object\n    {\n        return $test;\n    }\n}\n$ref = new \\ReflectionClass(Foo::class);\nforeach (['doFoo', 'doBar'] as $method) {\n    $params = $ref->getMethod($method)->getParameters();\n    foreach ($params as $param) {\n        echo \"isDefaultValueAvailable:\\n\";\n        var_dump($param->isDefaultValueAvailable());\n        echo \"isDefaultValueConstant:\\n\";\n        var_dump($param->isDefaultValueConstant());\n        echo \"getDefaultValueConstantName:\\n\";\n        var_dump($param->getDefaultValueConstantName());\n        echo \"getDefaultValue:\\n\";\n        var_dump($param->getDefaultValue());\n        echo \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
