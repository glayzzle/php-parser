// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug74111.phpt
  it("Bug #74111: Heap buffer overread (READ: 1) finish_nested_data from unserialize", function () {
    expect(parser.parseCode("<?php\n$s = 'O:8:\"stdClass\":00000000';\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
