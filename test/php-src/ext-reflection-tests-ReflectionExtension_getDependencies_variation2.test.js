// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getDependencies_variation2.phpt
  it("ReflectionExtension::getDependencies() method on an extension with one optional dependency", function () {
    expect(parser.parseCode("<?php\n$standard = new ReflectionExtension('standard');\nvar_dump($standard->getDependencies());\n?>")).toMatchSnapshot();
  });
});
