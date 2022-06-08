// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getClassNames_variation1.phpt
  it("ReflectionExtension::getClassNames() method on an extension with no classes", function () {
    expect(parser.parseCode("<?php\n$extension = new ReflectionExtension('ctype');\nvar_dump($extension->getClassNames());\n?>")).toMatchSnapshot();
  });
});
