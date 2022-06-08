// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75673.phpt
  it("Bug #75673 (SplStack::unserialize() behavior)", function () {
    expect(parser.parseCode("<?php\n$stack = new SplStack();\n$stack->push(\"one\");\n$stack->push(\"two\");\n$serialized = $stack->serialize();\nvar_dump($stack->count());\n$stack->unserialize($serialized);\nvar_dump($stack->count());\n$stack->unserialize($serialized);\nvar_dump($stack->count());\n?>")).toMatchSnapshot();
  });
});
