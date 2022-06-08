// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug38465.phpt
  it("Bug #38465 (ReflectionParameter fails on access to self::)", function () {
    expect(parser.parseCode("<?php\nclass Baz {\n    const B = 3;\n}\nclass Foo {\n    const X = 1;\n    public function x($a = self::X, $b = Baz::B, $c = 99) {}\n}\nclass Bar extends Foo {\n    const Y = 2;\n    public function y($a = self::Y, $b = Baz::B, $c = 99) {}\n}\necho \"From global scope:\\n\";\n$clazz = new ReflectionClass('Bar');\nforeach ($clazz->getMethods() as $method) {\n    foreach ($method->getParameters() as $param) {\n        if ($param->isDefaultValueAvailable()) {\n            echo $method->getDeclaringClass()->getName(), '::', $method->getName(), '($', $param->getName(), ' = ', $param->getDefaultValue(), \")\\n\";\n        }\n    }\n}\necho \"\\nFrom class context:\\n\";\nclass Test {\n    function __construct() {\n        $clazz = new ReflectionClass('Bar');\n        foreach ($clazz->getMethods() as $method) {\n            foreach ($method->getParameters() as $param) {\n                if ($param->isDefaultValueAvailable()) {\n                    echo $method->getDeclaringClass()->getName(), '::', $method->getName(), '($', $param->getName(), ' = ', $param->getDefaultValue(), \")\\n\";\n                }\n            }\n        }\n    }\n}\nnew Test();\n?>")).toMatchSnapshot();
  });
});
