// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_mixed_keyed_unkeyed.phpt
  it("list() with both keyed and unkeyed elements", function () {
    expect(parser.parseCode("<?php\n$contrivedKeyedAndUnkeyedArrayExample = [\n    0,\n    1 => 1,\n    \"foo\" => \"bar\"\n];\nlist($zero, 1 => $one, \"foo\" => $foo) = $contrivedKeyedAndUnkeyedArrayExample;\n?>")).toMatchSnapshot();
  });
});
