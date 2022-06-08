// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionType_possible_types.phpt
  it("ReflectionType possible types", function () {
    expect(parser.parseCode("<?php\n$functions = [\n    function(): void {},\n    function(): int {},\n    function(): float {},\n    function(): string {},\n    function(): bool {},\n    function(): array {},\n    function(): callable {},\n    function(): iterable {},\n    function(): StdClass {}\n];\nforeach ($functions as $function) {\n    $reflectionFunc = new ReflectionFunction($function);\n    $returnType = $reflectionFunc->getReturnType();\n    var_dump($returnType->getName());\n}\n?>")).toMatchSnapshot();
  });
});
