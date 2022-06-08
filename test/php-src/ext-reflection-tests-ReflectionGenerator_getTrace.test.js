// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionGenerator_getTrace.phpt
  it("ReflectionGenerator::getTrace() over multiple Generators", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    yield 1;\n    yield 2;\n}\nfunction bar()\n{\n    yield from foo();\n}\nfunction baz()\n{\n    yield from bar();\n}\n$gen = baz();\n$gen->valid();\nvar_dump((new ReflectionGenerator($gen))->getTrace());\n?>")).toMatchSnapshot();
  });
});
