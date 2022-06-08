// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_undef_exception.phpt
  it("Undef to exception for assign dim offset", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $m){\n    throw new Exception($m);\n});\nfunction test1() {\n    $a = [];\n    $res = $a[$undef] = null;\n}\nfunction test2() {\n    $a = [];\n    $res = $a[$undef] += 1;\n}\nfunction test3() {\n    $a = [];\n    $res = isset($a[$undef]);\n}\ntry {\n    test1();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
