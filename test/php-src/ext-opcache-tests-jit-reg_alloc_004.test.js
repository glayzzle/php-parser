// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_004.phpt
  it("Register Alloction 004: Check guard before register load", function () {
    expect(parser.parseCode("<?php\nfunction createTree($depth) {\n    if (!$depth) {\n        return;\n    }\n    $depth--;\n    [createTree($d), createTree($depth)]();\n}\ncreateTree(4);\n?>")).toMatchSnapshot();
  });
});
