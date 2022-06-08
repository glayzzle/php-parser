// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_005.phpt
  it("JIT ASSIGN_DIM_OP: Undefined variable and index with exception", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $m){\n    throw new Exception($m);\n});\nfunction test1() {\n    $res = $a[$undef] = null;\n}\nfunction test2() {\n    $res = $a[$undef] += 1;\n}\ntry {\n    test1();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
