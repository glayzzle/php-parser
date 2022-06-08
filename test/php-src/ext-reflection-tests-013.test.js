// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/013.phpt
  it("ReflectionExtension::getFunctions()", function () {
    expect(parser.parseCode("<?php\n$ext = new ReflectionExtension(\"standard\");\n$funcs = $ext->getFunctions();\necho $funcs[\"sleep\"]->getName();\n?>")).toMatchSnapshot();
  });
});
