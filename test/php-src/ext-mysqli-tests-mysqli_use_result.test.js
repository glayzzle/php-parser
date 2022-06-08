// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_use_result.phpt
  it("mysqli_use_result()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$res = mysqli_real_query($link, \"SELECT id, label FROM test ORDER BY id\"))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!is_object($res = mysqli_use_result($link)))\n        printf(\"[004] Expecting object, got %s/%s. [%d] %s\\n\",\n            gettype($res), $res, mysqli_errno($link), mysqli_error($link));\n    try {\n        var_dump(mysqli_data_seek($res, 2));\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    mysqli_free_result($res);\n    if (!mysqli_query($link, \"DELETE FROM test\"))\n        printf(\"[006] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (false !== ($res = mysqli_use_result($link)))\n        printf(\"[007] Expecting boolean/false, got %s/%s. [%d] %s\\n\",\n            gettype($res), $res, mysqli_errno($link), mysqli_error($link));\n    if (!$res = mysqli_query($link, \"SELECT id, label FROM test ORDER BY id\"))\n        printf(\"[008] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (false !== ($tmp = mysqli_data_seek($res, 1)))\n        printf(\"[009] Expecting boolean/false, got %s/%s\\n\",\n            gettype($tmp), $tmp);\n    mysqli_close($link);\n    try {\n        mysqli_use_result($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
