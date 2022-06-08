// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isArray.phpt
  it("public bool ReflectionParameter::isArray ( void );", function () {
    expect(parser.parseCode("<?php\nfunction testReflectionIsArray(array $a, ?array $b, iterable $c, array|string $d) {}\n$reflection = new ReflectionFunction('testReflectionIsArray');\nforeach ($reflection->getParameters() as $parameter) {\n    var_dump($parameter->isArray());\n}\n?>")).toMatchSnapshot();
  });
});
