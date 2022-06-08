// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug33312.phpt
  it("Reflection Bug #33312 (ReflectionParameter methods do not work correctly)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function bar(Foo $foo, $bar = 'bar') {\n    }\n}\n$class = new ReflectionClass('Foo');\n$method = $class->getMethod('bar');\nforeach ($method->getParameters() as $parameter) {\n    if ($parameter->isDefaultValueAvailable()) {\n        print $parameter->getDefaultValue().\"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
