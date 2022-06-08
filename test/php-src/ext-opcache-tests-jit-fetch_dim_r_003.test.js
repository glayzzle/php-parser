// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_003.phpt
  it("JIT FETCH_DIM_R: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = \"ABCDEF\";\n    var_dump($a[0]);\n    var_dump($a[2]);\n    var_dump($a[1.0]);\n    var_dump($a[\"0\"]);\n    var_dump($a[\"2\"]);\n    var_dump($a[false]);\n    var_dump($a[true]);\n    var_dump($a[null]);\n    try {\n        var_dump($a[\"ab\"]);\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    $x = \"a\";\n    $y = \"b\";\n    try {\n        var_dump($a[$x . $y]);\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump($a[\"2x\"]);\n    $x = \"2\";\n    $y = \"x\";\n    var_dump($a[$x . $y]);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
