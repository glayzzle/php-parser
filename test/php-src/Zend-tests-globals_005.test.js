// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/globals_005.phpt
  it("$GLOBALS resize", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  for ($i = 0; $i < 100; $i++) {\n     $GLOBALS[\"A\". $i]  = 1; //trigger resize\n  }\n  return \"ops\";\n}\n$GLOBALS[foo()] = \"ops\";\n?>\nDONE")).toMatchSnapshot();
  });
});
