// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug70674.phpt
  it("Bug #70674 (ReflectionFunction::getClosure() leaks memory when used for internal functions)", function () {
    expect(parser.parseCode("<?php\nvar_dump(((new ReflectionFunction(\"strlen\"))->getClosure())(\"hello\"));\n?>")).toMatchSnapshot();
  });
});
