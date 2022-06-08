// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75969.phpt
  it("Bug #75969: Assertion failure in live range DCE due to block pass misoptimization", function () {
    expect(parser.parseCode("<?php\n// This is required for the segfault\nmd5('foo');\nclass Extended_Class {};\n$response = array(\n    'a' => 'b'\n);\nnew Extended_Class( array(\n    'foo' => $response,\n    'foo2' => 'bar2'\n) );\n?>\n===DONE===")).toMatchSnapshot();
  });
});
