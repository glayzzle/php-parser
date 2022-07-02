// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug23524.phpt
  it("Bug #23524 (Improper handling of constants in array indices)", function () {
    expect(parser.parseCode("<?php\n  echo \"Begin\\n\";\n  define(\"THE_CONST\",123);\n  function f($a=array(THE_CONST=>THE_CONST)) {\n    print_r($a);\n  }\n  f();\n  f();\n  f();\n  echo \"Done\";\n?>")).toMatchSnapshot();
  });
});
