// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_004.phpt
  it("JIT FETCH_DIM_R: 004", function () {
    expect(parser.parseCode("<?php\nfunction foo($n) {\n    $a = \"ABCDEF\";\n    try {\n        var_dump($a[$n]);\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\nfoo(0);\nfoo(2);\nfoo(1.0);\nfoo(\"0\");\nfoo(\"2\");\nfoo(false);\nfoo(true);\nfoo(null);\nfoo(\"ab\");\n$x=\"a\";\n$y=\"b\";\nfoo($x.$y);\nfoo(\"2x\");\n$x=2;\n$y=\"x\";\nfoo($x.$y);\n?>")).toMatchSnapshot();
  });
});
