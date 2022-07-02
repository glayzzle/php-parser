// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_by_val_function_by_ref_return_value.phpt
  it("Return value of assigning by-val function result by-reference", function () {
    expect(parser.parseCode("<?php\n$a = [&$a];\nvar_dump($a[0] =& returnsVal());\nfunction returnsVal() {}\n?>")).toMatchSnapshot();
  });
});
