// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/empty_variation.phpt
  it("empty() on array elements", function () {
    expect(parser.parseCode("<?php\n$a=array('0','empty'=>'0');\nvar_dump(empty($a['empty']));\nvar_dump(empty($a[0]));\n$b='0';\nvar_dump(empty($b));\n?>")).toMatchSnapshot();
  });
});
