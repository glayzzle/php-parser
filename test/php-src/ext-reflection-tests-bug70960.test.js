// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug70960.phpt
  it("Bug #70960 (ReflectionFunction for array_unique returns wrong number of parameters)", function () {
    expect(parser.parseCode("<?php\n$ref = new ReflectionFunction('array_unique');\nvar_dump(count($ref->getParameters()));\n?>")).toMatchSnapshot();
  });
});
