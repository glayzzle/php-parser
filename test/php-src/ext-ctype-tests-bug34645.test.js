// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/bug34645.phpt
  it("Bug #34645 (ctype corrupts memory when validating large numbers)", function () {
    expect(parser.parseCode("<?php\n$id = 394829384;\nvar_dump(ctype_digit($id));\nvar_dump($id);\n?>")).toMatchSnapshot();
  });
});
