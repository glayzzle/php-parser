// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/internal.phpt
  it("Named params on internal functions", function () {
    expect(parser.parseCode("<?php\nvar_dump(array_slice(array: [1, 2, 3, 4, 5], offset: 2, length: 2));\nvar_dump(array_slice(length: 2, offset: 2, array: [1, 2, 3, 4, 5]));\nvar_dump(array_slice(array: ['a' => 0, 'b' => 1], offset: 1, preserve_keys: true));\nvar_dump(array_slice(['a' => 0, 'b' => 1], preserve_keys: true, offset: 1));\nvar_dump(str_pad(\"foo\", 6, pad_type: STR_PAD_LEFT));\n// Named params work with specialized functions.\nvar_dump(strlen(string: 'foo'));\n?>")).toMatchSnapshot();
  });
});
