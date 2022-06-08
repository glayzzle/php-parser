// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_param_count.phpt
  it("mysqli_stmt_param_count()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$stmt = mysqli_stmt_init($link))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    try {\n        mysqli_stmt_param_count($stmt);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    function func_test_mysqli_stmt_param_count($stmt, $query, $expected, $offset) {\n        if (!mysqli_stmt_prepare($stmt, $query)) {\n            printf(\"[%03d] [%d] %s\\n\", $offset, mysqli_stmt_errno($stmt), mysqli_error($stmt));\n            return false;\n        }\n        if ($expected !== ($tmp = mysqli_stmt_param_count($stmt)))\n            printf(\"[%03d] Expecting %s/%d, got %s/%d\\n\", $offset + 3,\n                gettype($expected), $expected,\n                gettype($tmp), $tmp);\n        return true;\n    }\n    func_test_mysqli_stmt_param_count($stmt, \"SELECT 1 AS a\", 0, 10);\n    func_test_mysqli_stmt_param_count($stmt, \"INSERT INTO test(id) VALUES (?)\", 1, 20);\n    func_test_mysqli_stmt_param_count($stmt, \"INSERT INTO test(id, label) VALUES (?, ?)\", 2, 30);\n    func_test_mysqli_stmt_param_count($stmt, \"INSERT INTO test(id, label) VALUES (?, '?')\", 1, 40);\n    mysqli_stmt_close($stmt);\n    try {\n        mysqli_stmt_param_count($stmt);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
