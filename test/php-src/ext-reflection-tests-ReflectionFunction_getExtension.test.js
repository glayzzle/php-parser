// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getExtension.phpt
  it("ReflectionFunction::getExtension()", function () {
    expect(parser.parseCode("<?php\nfunction foo () {}\n$function = new ReflectionFunction('sort');\nvar_dump($function->getExtension());\n$function = new ReflectionFunction('foo');\nvar_dump($function->getExtension());\n?>")).toMatchSnapshot();
  });
});
