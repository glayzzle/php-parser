// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_column_numeric_string_key.phpt
  it("array_column() treats numeric string keys as usual", function () {
    expect(parser.parseCode("<?php\n$array = [[42 => 'a'], [42 => 'b']];\nvar_dump(array_column($array, 42));\nvar_dump(array_column($array, \"42\"));\n?>")).toMatchSnapshot();
  });
});
