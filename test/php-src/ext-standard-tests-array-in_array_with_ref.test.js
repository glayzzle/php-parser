// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/in_array_with_ref.phpt
  it("in_array() with references", function () {
    expect(parser.parseCode("<?php\n$value = 42;\n$array = [&$value];\nvar_dump(in_array(42, $array, false));\nvar_dump(in_array(42, $array, true));\n?>")).toMatchSnapshot();
  });
});
