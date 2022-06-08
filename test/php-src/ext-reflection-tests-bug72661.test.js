// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug72661.phpt
  it("Bug #72661 (ReflectionType::__toString crashes with iterable)", function () {
    expect(parser.parseCode("<?php\nfunction test(iterable $arg) { }\nvar_dump((string)(new ReflectionParameter(\"test\", 0))->getType());\n?>")).toMatchSnapshot();
  });
});
