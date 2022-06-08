// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_002.phpt
  it("Attempt to pass a constant by reference", function () {
    expect(parser.parseCode("<?php\nfunction f(&$arg1)\n{\n    var_dump($arg1++);\n}\nf(2);\n?>")).toMatchSnapshot();
  });
});
