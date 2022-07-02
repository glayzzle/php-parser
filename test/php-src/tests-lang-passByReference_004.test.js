// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_004.phpt
  it("passing the return value from a function by reference", function () {
    expect(parser.parseCode("<?php\nfunction foo(&$ref)\n{\n    var_dump($ref);\n}\nfunction bar($value)\n{\n    return $value;\n}\nfoo(bar(5));\n?>")).toMatchSnapshot();
  });
});
