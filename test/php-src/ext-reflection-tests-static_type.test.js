// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/static_type.phpt
  it("ReflectionType for static types", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test(): static {\n        return new static;\n    }\n}\n$rm = new ReflectionMethod(A::class, 'test');\n$rt = $rm->getReturnType();\nvar_dump($rt->isBuiltin());\nvar_dump($rt->getName());\nvar_dump((string) $rt);\n?>")).toMatchSnapshot();
  });
});
