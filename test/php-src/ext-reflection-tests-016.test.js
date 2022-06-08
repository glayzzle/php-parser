// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/016.phpt
  it("ReflectionExtension::getDependencies()", function () {
    expect(parser.parseCode("<?php\n$ext = new ReflectionExtension(\"xml\");\n$deps = $ext->getDependencies();\nvar_dump($deps);\n?>")).toMatchSnapshot();
  });
});
