// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getClassNames_basic.phpt
  it("ReflectionExtension::getClassNames() method on an extension which actually returns some information", function () {
    expect(parser.parseCode("<?php\n$standard = new ReflectionExtension('standard');\nvar_dump($standard->getClassNames());\n?>")).toMatchSnapshot();
  });
});
