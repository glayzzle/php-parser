// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_002.phpt
  it("JIT FETCH_DIM_R: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo($n) {\n    $a = array(1,2,3,\"\"=>4,\"ab\"=>5,\"2x\"=>6);\n    var_dump($a[$n]);\n}\nfoo(0);\nfoo(2);\nfoo(1.0);\nfoo(\"0\");\nfoo(\"2\");\nfoo(false);\nfoo(true);\nfoo(null);\nfoo(\"ab\");\n$x=\"a\";\n$y=\"b\";\nfoo($x.$y);\nfoo(\"2x\");\n$x=2;\n$y=\"x\";\nfoo($x.$y);\n?>")).toMatchSnapshot();
  });
});
