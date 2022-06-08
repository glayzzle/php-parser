// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_getExtensionName.phpt
  it("ReflectionFunction::getExtensionName()", function () {
    expect(parser.parseCode("<?php\nfunction foo() {}\n$function = new ReflectionFunction('sort');\nvar_dump($function->getExtensionName());\n$function = new ReflectionFunction('foo');\nvar_dump($function->getExtensionName());\n?>")).toMatchSnapshot();
  });
});
