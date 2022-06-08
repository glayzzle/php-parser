// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_isPersistant.phpt
  it("ReflectionExtension::isPersistent()", function () {
    expect(parser.parseCode("<?php\n$obj = new ReflectionExtension('reflection');\nvar_dump($obj->isPersistent());\n?>")).toMatchSnapshot();
  });
});
