// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_001.phpt
  it("JIT FETCH_DIM_R: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array(1,2,3,\"\"=>4,\"ab\"=>5,\"2x\"=>6);\n    var_dump($a[0]);\n    var_dump($a[2]);\n    var_dump($a[1.0]);\n    var_dump($a[\"0\"]);\n    var_dump($a[\"2\"]);\n    var_dump($a[false]);\n    var_dump($a[true]);\n    var_dump($a[null]);\n    var_dump($a[\"ab\"]);\n    $x = \"a\";\n    $y = \"b\";\n    var_dump($a[$x . $y]);\n    var_dump($a[\"2x\"]);\n    $x = \"2\";\n    $y = \"x\";\n    var_dump($a[$x . $y]);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
