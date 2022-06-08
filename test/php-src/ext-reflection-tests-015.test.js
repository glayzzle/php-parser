// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/015.phpt
  it("ReflectionExtension::getINIEntries()", function () {
    expect(parser.parseCode("<?php\n$ext = new ReflectionExtension(\"standard\");\n$inis = $ext->getINIEntries();\nvar_dump($inis[\"user_agent\"]);\n?>")).toMatchSnapshot();
  });
});
