// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/filter_var_array_with_ref.phpt
  it("filter_var_array() on array with reference", function () {
    expect(parser.parseCode("<?php\n$array = [\"123foo\"];\n$array2 = [&$array];\nvar_dump(filter_var_array($array2, FILTER_VALIDATE_INT));\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
