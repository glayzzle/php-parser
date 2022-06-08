// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_by_ref_from_void_function.phpt
  it("Returning by reference from void function is deprecated", function () {
    expect(parser.parseCode("<?php\nfunction &test(): void {\n}\n$r =& test();\nvar_dump($r);\n?>")).toMatchSnapshot();
  });
});
