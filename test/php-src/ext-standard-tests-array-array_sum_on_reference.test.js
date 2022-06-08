// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_on_reference.phpt
  it("array_sum() on array with references", function () {
    expect(parser.parseCode("<?php\n$n = \"10\";\n$n .= \"0\";\n$nums = [&$n, 100];\nvar_dump(array_sum($nums));\nvar_dump($n);\n?>")).toMatchSnapshot();
  });
});
