// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug80299.phpt
  it("Bug #80299: ReflectionFunction->invokeArgs confused in arguments", function () {
    expect(parser.parseCode("<?php\n$bar = new DateTime();\n$args = [1, &$bar];\n$function = function (int &$foo, DateTimeInterface &$bar) {};\n(new ReflectionFunction($function))->invokeArgs($args);\n?>")).toMatchSnapshot();
  });
});
