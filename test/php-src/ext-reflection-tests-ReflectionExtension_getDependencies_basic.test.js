// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_getDependencies_basic.phpt
  it("ReflectionExtension::getDependencies() method on an extension with a required and conflicting dependency", function () {
    expect(parser.parseCode("<?php\n$dom = new ReflectionExtension('dom');\nvar_dump($dom->getDependencies());\n?>")).toMatchSnapshot();
  });
});
