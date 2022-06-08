// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_bug66218.phpt
  it("ReflectionExtension::getFunctions() ##6218 zend_register_functions breaks reflection", function () {
    expect(parser.parseCode("<?php\n$r = new ReflectionExtension('standard');\n$t = $r->getFunctions();\nvar_dump($t['dl']);\n?>\nDone")).toMatchSnapshot();
  });
});
