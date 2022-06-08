// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug80190.phpt
  it("Bug #80190: ReflectionMethod::getReturnType() does not handle static as part of union type", function () {
    expect(parser.parseCode("<?php\nclass C\n{\n    public function a(): self\n    {\n    }\n    public function b(): stdClass|self\n    {\n    }\n    public function c(): static\n    {\n    }\n    public function d(): stdClass|static\n    {\n    }\n}\nforeach ((new ReflectionClass(C::class))->getMethods() as $method) {\n    print $method->getDeclaringClass()->getName() . '::' . $method->getName() . '()' . PHP_EOL;\n    print '    $method->getReturnType() returns ' . get_class($method->getReturnType()) . PHP_EOL;\n    print '    $method->getReturnType()->__toString() returns ' . $method->getReturnType() . PHP_EOL;\n    if ($method->getReturnType() instanceof ReflectionUnionType) {\n        print '    $method->getReturnType()->getTypes() returns an array with ' . count($method->getReturnType()->getTypes()) . ' element(s)' . PHP_EOL;\n        print '    type(s) in union: ';\n        \n        $types = [];\n        foreach ($method->getReturnType()->getTypes() as $type) {\n            $types[] = get_class($type) . \"($type)\";\n        }\n        \n        print join(', ', $types) . PHP_EOL;\n    }\n    print PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
