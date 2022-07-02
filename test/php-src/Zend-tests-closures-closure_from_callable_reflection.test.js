// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closures/closure_from_callable_reflection.phpt
  it("Testing Closure::fromCallable() functionality: Reflection", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n    public static function staticMethod(Bar $bar, int $int, $none) {}\n    public static function instanceMethod(Bar $bar, int $int, $none) {}\n}\nfunction foo(Bar $bar, int $int, $none) {\n}\n$fn = function (Bar $bar, int $x, $none) {};\n$bar = new Bar();\n$callables = [\n    'foo',\n    $fn,\n    'Bar::staticMethod',\n    [$bar, 'instanceMethod']\n];\nforeach ($callables as $callable) {\n    $closure = Closure::fromCallable($callable);\n    $refl = new ReflectionFunction($closure);\n    foreach ($refl->getParameters() as $param) {\n        if ($param->hasType()) {\n            $type = $param->getType();\n            echo $type->getName() . \"\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
