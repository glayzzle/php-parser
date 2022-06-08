// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getClasses_basic.phpt
  it("ReflectionExtension::getClasses();", function () {
    expect(parser.parseCode("<?php\n$ext = new ReflectionExtension('reflection');\nvar_dump($ext->getClasses());\n?>")).toMatchSnapshot();
  });
});
