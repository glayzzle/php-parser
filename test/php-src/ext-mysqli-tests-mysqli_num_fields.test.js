// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_num_fields.phpt
  it("mysqli_num_fields()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    function func_test_mysqli_num_fields($link, $query, $expected, $offset, $test_free = false) {\n        if (!($res = mysqli_query($link, $query))) {\n            printf(\"[%03d] [%d] %s\\n\", $offset, mysqli_errno($link), mysqli_error($link));\n            return;\n        }\n        if ($expected !== ($tmp = mysqli_num_fields($res)))\n            printf(\"[%03d] Expecting %s/%d, got %s/%d\\n\", $offset + 1,\n                gettype($expected), $expected,\n                gettype($tmp), $tmp);\n        mysqli_free_result($res);\n        try {\n            mysqli_num_fields($res);\n        } catch (Error $exception) {\n            echo $exception->getMessage() . \"\\n\";\n        }\n    }\n    func_test_mysqli_num_fields($link, \"SELECT 1 AS a\", 1, 5);\n    func_test_mysqli_num_fields($link, \"SELECT id, label FROM test\", 2, 10);\n    func_test_mysqli_num_fields($link, \"SELECT 1 AS a, NULL AS b, 'foo' AS c\", 3, 15);\n    func_test_mysqli_num_fields($link, \"SELECT id FROM test\", 1, 20, true);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
